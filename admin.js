const express = require('express');

const router = express.Router();

const util = require('util');

const fs = require('fs');

const path = require('path');


const pug = require('pug');

const compiledFunctionForm = pug.compileFile('views/form.pug');
const compiledFunctionLogin = pug.compileFile('views/login.pug');


const { check, validationResult } = require('express-validator/check');

const { Client } = require('pg')

const connectionString = 'postgres://:@localhost/examples';


async function admin(req, res){
    console.log(req.body)
    const data = {};
    return res.render('form', { data });
  }



module.exports = router;
