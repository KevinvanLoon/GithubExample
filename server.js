const express = require('express');
//const router = require('./router/app1');

const app = express(
);

app.all('*', (reg, res, next)=>{
   next();
});



app.listen(8080, ()=>{

    console.log("The fun starts dfgsdfh8080");
});

app.get('/hello', (reg, res, next)=>{
   res.status(200).json({
       'msg' : 'Hello xD'
   });
});

module.exports = app;