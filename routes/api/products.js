const express =require ('express');
const router = express.Router();

//@route  GET api/products
//@desc   Test route. will be a get request
router.get('/', (request, response) => response.send('Profile route'));

module.exports= router;