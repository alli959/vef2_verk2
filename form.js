const express = require('express');

const pug = require('pug')

const router = express.Router();

function form(req, res) {
  const data = {};
  res.render('form', { data });
}

router.get('/', form);

var name = "Hello";


module.exports = router;






