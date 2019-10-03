//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://alundberg:8KYT0tLW94D8@cen3031-h5pe3.mongodb.net/UFMap?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '01967102fc684980a613f0255b1b0d95' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};