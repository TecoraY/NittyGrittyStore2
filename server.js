const express=require('express');

const app =express();

app.get('/', (request, response)=> response.send('store up and running'));



const PORT= process.env.PORT|| 5000;

app.listen(PORT, ()=> console.log(`server started on ${PORT}`));