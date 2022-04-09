const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send('<h1>Puppies and Kittens Galore</h1>');});
app.get('/puppies', (req, res) => {
    res.send('PUPPIES!');
});
app.get('/kittens', (req, res) =>{
    res.send('<h3>Kittens<h3>');
})
app.listen(1337, () => {
  console.log('server listening');
});

app.get('/:name', (req, res)=> {
  console.log(req.params);
  res.send(`Hello ${req.params.name}`);
});
// would generate a hello based on the url name
app.get('*', (req, res, next) => {
  console.log(req.method, req.url);
  next();
})
