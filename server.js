const express = require('express');
//const router = require('./router/app1');

const app = express(
);

app.all('*', (reg, res, next)=>{
   next();
});

<<<<<<< HEAD
const port = 8080;
app.listen(port, ()=>{
=======
app.listen(8080, ()=>{
>>>>>>> parent of 5937e26... heroku
    console.log("The fun starts dfgsdfh8080");
});

app.get('/hello', (reg, res, next)=>{
   res.status(200).json({
       'msg' : 'Hello xD'
   });
});

module.exports = app;