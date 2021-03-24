const express = require('express');
const router = express.Router();
const data = require('../data/data.json');


// Home Page
router.get('/', (req, res, next) => {
    const projects = data.projects;
    res.render('index', { projects })
});

// About Page 
router.get('/about', (req, res, next) => {
    res.render('about')
});


// Single Page
router.get('/projects/:id', (req, res, next) => {
    const project = data.projects[req.params.id];
    res.render('project', { project })
});

router.get('/project/:id', (req, res, next) => {
    const project = data.projects[req.params.id];
    res.render('project', { project })
})

module.exports = router;