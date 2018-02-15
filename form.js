const express = require('express');

const pug = require('pug')

const router = express.Router();

const app = express();

const { check, validationResult } = require('express-validator/check');

const { Client } = require('pg')

const connectionString = 'postgres://:@localhost/examples';



async function form(req, res) {
  console.log(req.body)
  const data = {};
  return res.render('form', { data });
}

router.get('/', form);

app.post(
  '/post',

  // Þetta er bara validation! Ekki sanitization
  check('name').isLength({ min: 1 }).withMessage('Nafn má ekki vera tómt'),
  check('email').isLength({ min: 1}).withMessage('Netfang má ekki vera tómt'),
  check('email').isEmail().withMessage('Netfang verður að vera netfang'),
  check('ssn').isLength({ min: 1 }).withMessage('Kennitala má ekki vera tóm'),
  check('ssn').matches(/^[0-9]{6}-?[0-9]{4}$/).withMessage('Kennitala verður að vera á formi 000000-0000'),

  (req, res) => {
    const {
      name = '',
      email = '',
      ssn = '',
    } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(i => i.msg);
      return res.send(`${template(name, email, ssn)}
      <p>Villur:</p>
      <ul>
        <li>${errorMessages.join('</li><li>')}</li>
      </ul>`);
    }

    return res.send('<p>Skráning móttekin</p>');
  }
);






module.exports = router;






