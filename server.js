const express = require('express');
//const router = require('./router/app1');

const app = express(
);

app.all('*', (reg, res, next)=>{
   next();
});

app.listen(8080, ()=>{
    console.log("The fun starts 8080");
});

module.exports = app;