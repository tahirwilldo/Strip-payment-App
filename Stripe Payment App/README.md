# Stripe API Payment App
This is a book payment app using Stripe API.

## Getting Started
The below listed steps should be followed to make the app up and running.

``` npm install ```

``` npm start ```

### Prerequisits
  * Node JS installed
  * Stripe API account

### Configration
  * Inside app.js file replace your secret key from Stripe in the place of **secret_key**  
  ```const stripe = require('stripe')('secret_key'); ```

  * Inside index.handlebars file replace your Publishable key from Stripe in the place of **publishable_key**   
  ```<script data-key="publishable_key">```

### Dependencies
  * Express
  * Express Handlebars
  * Stripe
  * Body Parser

## Deployment 
Initially the app would be in the development phase. When you are set to deploy it you just need to change the **Secret Key** and **Publishable Key** to the actual keys which you would find on your Stripe Account Dashboard.


