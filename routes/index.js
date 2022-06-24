var express = require('express');
var router = express.Router();
var fs = require('fs');
var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


});
router.get('/events',function(req, res, next) {
  res.render('gallery') ;


})

router.get('/about',function(req, res, next) {
  res.render('about') ;
})

router.get('/contact',function(req, res, next) {
  res.render('contact') ;
})

router.post ('/submit',function(req, res, next){
let name = req.body.name;
let email = req.body.email;
let number = req.body.number;
fs.appendFile ('data.txt',`name: ${name}, email: ${email}, number: ${number}\n`, function(error){
  if(error){
    console.log(error)
  }
})


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {

    user: 'pawan.teach.demo@gmail.com',
    pass: 'cmaojfvghnvwmlvl'
  }
})
var mailOptions = {
  from: 'pawan.teach.demo@gmail.com',
  to: email,
  subject: 'Your tickets have been booked.',
  text: 'Thank you for booking the tickets to the concert!'


};
transporter.sendMail(mailOptions, function(error, info){
  if(error) {
    console.log(error);
  } else {
    res.render('success') 
  }



})
})




module.exports = router;

