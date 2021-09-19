const express = require('express');
const stripe = require('stripe')('secret_key');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

// Handlebars MiddleWare
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser MiddleWare
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.get('/' , (req, res) => {
  res.render('index');
});

app.post('/payment', (req, res) => {
  const amount = 1099;
  
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  }).then(customer => stripe.charges.create({
      amount: amount,
      description: 'Playing It My Way',
      currency: 'usd',
      customer: customer.id
  })).then(charges => res.render('success'));
});

app.get('*', (req, res) => {
  res.render('error');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Started on Port ${port}`));