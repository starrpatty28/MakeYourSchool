const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor ({ subject, recipients  }, content) {

  } 
} 

module.exports = Mailer;