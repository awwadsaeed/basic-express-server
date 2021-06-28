'use strict';
const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

app.get('/person',validator,(req,res)=>{
    const name = req.query.name;
    res.status(200).json({ name: name});
})

app.use(errorHandler);
app.use('*',notFoundHandler);
function start(port){
    app.listen(port,()=>{
        console.log(`listening on port ${port}`);
    })
}

module.exports={
    start,app
}