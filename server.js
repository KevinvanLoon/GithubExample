const express = require('express');
//const router = require('./router/app1');

const app = express(
);

app.all('*', (reg, res, next)=>{
   next();
});



app.listen(process.env.PORT, ()=>{

    console.log("The fun starts dfgsdfh8080");
});

app.get('/hello', (reg, res, next)=>{
   res.status(200).json({
       'msg' : 'Nieuwe versie'
   });
});

module.exports = app;