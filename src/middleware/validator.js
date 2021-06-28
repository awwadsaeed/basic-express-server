'use strict';
module.exports=(req,res,next)=>{
    console.log('stuff',req.query.name);
    if(req.query.name){
        next();
    }else{
        next('plz enter a name');
    }
}