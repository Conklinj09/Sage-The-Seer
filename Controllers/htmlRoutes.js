const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('login', {
        
    });
});

router.get('/dashboard', async (req, res) => {
    res.render('questions');
});

module.exports = router;