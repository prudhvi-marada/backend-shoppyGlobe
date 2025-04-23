import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/productRoute.js';
import loginRoute from './routes/loginRoute.js';
import cartRoute from './routes/cartRoute.js';
const mongodbAtlasLink="mongodb+srv://maradaprudhvi:OspwIKyBBw8ypMDz@cluster0.bmlsdrj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// main file  
//initialize server
const app=express();
app.use(express.json());
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/', loginRoute);

// connection to the mongodb atlas
mongoose.connect(mongodbAtlasLink)
  .then(()=>{
    console.log("database is connected successfully");

  })
  .catch(error=>console.log(error));

//running the server at localhost 3000.
app.listen(3000,()=>{
    console.log("server is running at 3000")
});
