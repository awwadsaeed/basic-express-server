'use strict';
const validator = require('../src/middleware/validator');

describe('validator',()=>{

    const req = {
        query:{ }
    };
    const res = {};
    const next = jest.fn();
    
  
    
    it('no name provided error',()=>{
        validator(req,res,next);
        expect(next).toHaveBeenCalledWith('plz enter a name');
    })
  it('moves to the next middleware',()=>{
    req.query.name='whatever';
    validator(req,res,next);
    expect(next).toHaveBeenCalledWith();
  })
})