const requireLogin = require('../middlewares/')

module.exports = app => {
  app.post('/api/surveys', requireLogin, (req, res) => {

 });
};