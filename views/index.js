const express = require('express');
const app = express();
const mongoose = require('mongoose');



app.all('*', (req,res,next)=>{
    next(new ExpressError('Page Not Found', 404))
 })
 // error hadling 
 app.use((err, req, res, next) =>{
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
 
    res.status(statusCode).render('error.ejs', { err })
 })
 
 app.get('/',(req,res) =>{
    res.send('hi')
 })
 // 
 //server
 app.listen(3000, () => {
    console.log('Serving on port 3001')
 })