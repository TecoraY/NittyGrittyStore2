const express=require('express');
const connectDB=require('./config/db');
const PORT= 8000;
const app =express();
connectDB();
const products=require('./routes/api/products');
app.use(express.json({extended:false}));
app.set ('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (request, response)=> response.send('store up and running'));
app.get('/products', (request, response)=> response.render('Index'));


//define routes
//tells where to grab the user js to run the page for creating a user. 
app.use('/api/users', require('./routes/api/users'));




app.listen(PORT, ()=> console.log(`server started on ${PORT}`));