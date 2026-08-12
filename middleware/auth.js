const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'elimu_dev_secret';

function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(header.split(' ')[1], SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

function adminOnly(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
}

function sign(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
}

module.exports = { auth, adminOnly, sign };
