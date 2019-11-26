const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/about', (req, res) => {
  res.sendFile('about.html')
})

app.get('/:name', (req, res) => {
  res.send('Hello ' + req.params.name)
})

app.listen(port, function(){
  console.log('listening on port: ' + port)
})