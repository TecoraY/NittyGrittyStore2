const express=require('express');
const router=express.Router();

const { check, validationResult}=require('express-validator')
//route post api/users
//description register user for the creation of custom product

router.post('/',[//error handling for completing form and making a user
    check('name', 'Name is Required').not().isEmpty(), //will continue only if not empty
    check('email', 'Please include a valid email').isEmail(),//will only continue in string is in email format
    check('password', 'Please enter a password with 10 or more characters').isLength({min:10})
],
(request, response)=>{
    //initialize middleware
    //console.log(request.body); //makes sure information is being posted. 
    const errors=validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({errors:errors.array()//if information not correct get a bad request message explaining what is missing
    });
    }
    response.send('User route');
});
module.exports=router;