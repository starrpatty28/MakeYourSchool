const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({yassss: 'You are connected'})
});

app.listen(5000); 


