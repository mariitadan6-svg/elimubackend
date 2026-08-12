const express = require('express');
const path = require('path');
const catalog = require(path.join(__dirname, '..', 'seed', 'catalog.js'));

const router = express.Router();

// Get all universities
router.get('/universities', (req, res) => {
  res.json(catalog.universities.map(u => ({ id: u.id, name: u.name, shortName: u.shortName, location: u.location })));
});

// Get faculties for a university
router.get('/universities/:uniId/faculties', (req, res) => {
  const uni = catalog.universities.find(u => u.id === req.params.uniId);
  if (!uni) return res.status(404).json({ error: 'University not found' });
  // Universities share the master faculty list – realistic for Kenyan public/private universities
  res.json(catalog.faculties);
});

// Get courses for a faculty
router.get('/faculties/:facId/courses', (req, res) => {
  const fac = catalog.faculties.find(f => f.id === req.params.facId);
  if (!fac) return res.status(404).json({ error: 'Faculty not found' });
  const courses = catalog.courses.filter(c => c.facultyId === fac.id);
  res.json(courses);
});

// Get units for a course
router.get('/courses/:courseId/units', (req, res) => {
  const course = catalog.courses.find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json({ course, units: course.units });
});

// Get one course with everything embedded
router.get('/courses/:courseId', (req, res) => {
  const course = catalog.courses.find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  const faculty = catalog.faculties.find(f => f.id === course.facultyId);
  res.json({ course, faculty });
});

// Search across everything
router.get('/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase().trim();
  if (!q) return res.json({ courses: [], units: [], universities: [] });

  const courses = catalog.courses
    .filter(c => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q))
    .slice(0, 20);
  const units = [];
  catalog.courses.forEach(c => {
    c.units.forEach(u => {
      if (u.name.toLowerCase().includes(q) || u.code.toLowerCase().includes(q)) {
        units.push({ ...u, courseName: c.name, courseId: c.id });
      }
    });
  });
  const universities = catalog.universities
    .filter(u => u.name.toLowerCase().includes(q) || u.shortName.toLowerCase().includes(q))
    .slice(0, 20);

  res.json({ courses, units: units.slice(0, 30), universities });
});

// Stats endpoint (used on home page)
router.get('/stats', (req, res) => {
  let unitCount = 0;
  catalog.courses.forEach(c => { unitCount += c.units.length; });
  res.json({
    universities: catalog.universities.length,
    faculties: catalog.faculties.length,
    courses: catalog.courses.length,
    units: unitCount
  });
});

module.exports = router;
