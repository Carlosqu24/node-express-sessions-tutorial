const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      res.render('index');
});


router.post('/register', (req, res) => {
      console.log(req.body);

      req.flash('success', 'Now you are registered!');

      res.redirect('/profile');
});

router.get('/profile', (req, res) => {  
      res.render('profile');
});


router.get('/products', (req, res) => {
      res.render('products')
});


module.exports = router;