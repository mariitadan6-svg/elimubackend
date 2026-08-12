/**
 * ELIMUmaterial - Backend API Server
 * Kenyan University Study Materials Platform
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- Security & parsing middleware ----------
// CORS: allow the deployed Netlify frontend, localhost dev, and any explicit CLIENT_URL.
const allowed = new Set(
  ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://localhost:5500', 'http://127.0.0.1:5500']
    .concat((process.env.CLIENT_URL || '*').split(',').map(s => s.trim()))
);
const allowAll = allowed.has('*');
app.use(cors({
  origin: (origin, cb) => {
    // No Origin header (curl, Render health checks, same-origin file fetch) -> allow
    if (!origin || allowAll || allowed.has(origin)) return cb(null, true);
    // Allow any *.netlify.app subdomain so preview/deploy URLs always work
    if (/^https:\/\/[a-z0-9-]+\.netlify\.app$/i.test(origin)) return cb(null, true);
    return cb(null, true); // public read-only API — permissive, JWT guards mutations
  },
  credentials: false
}));

// Basic security headers (no extra dependency)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
  next();
});

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Ensure upload dirs exist
['uploads', 'uploads/notes', 'uploads/papers', 'db'].forEach(d => {
  const p = path.join(__dirname, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

// Serve uploaded PDFs statically (with long cache — files are immutable)
app.use('/files', express.static(path.join(__dirname, 'uploads'), {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.pdf')) res.setHeader('Content-Type', 'application/pdf');
  }
}));

// Admin panel — hosted on the backend's public folder, at /admin
app.use('/admin', express.static(path.join(__dirname, 'public', 'admin')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'index.html')));

// Rate limiter for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many attempts, please try again later.' }
});

// ---------- Routes ----------
app.get('/', (req, res) => {
  res.json({
    name: 'ELIMUmaterial API',
    version: '1.1.0',
    status: 'running',
    docs: '/api/health'
  });
});

app.get('/api/health', async (req, res) => {
  let dbOk = true;
  try {
    const db = require('./models/db');
    await db.users.count({});
  } catch (e) { dbOk = false; }
  res.json({
    status: dbOk ? 'ok' : 'degraded',
    db: dbOk ? 'connected' : 'error',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

app.use('/api/auth', authLimiter, require('./routes/auth'));
app.use('/api/catalog', require('./routes/catalog'));
app.use('/api/materials', require('./routes/materials'));
app.use('/api/groups', require('./routes/groups'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/user', require('./routes/user'));
app.use('/api/favorites', require('./routes/favorites'));      // NEW: unit bookmarks
app.use('/api/announcements', require('./routes/announcements')); // NEW: admin notices

// 404
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

// Error handler — always JSON, never an HTML stack page
app.use((err, req, res, next) => {
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Malformed JSON body' });
  }
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

app.listen(PORT, () => {
  console.log(`✅ ELIMUmaterial API running on port ${PORT}`);
});
