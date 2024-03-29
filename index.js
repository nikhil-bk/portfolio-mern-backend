require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');







const app = express();

// middleware 
app.use(express.json());


// const __dirname = path.resolve()
app.use(cors({
    credentials:true,
    origin:["https://mern-frontend-portfolio.vercel.app","https://mern-frontend-portfolio-nikhil-bk.vercel.app","http://localhost:3000","https://portfolio.nikhil-bk.com"]
    // origin:["http://localhost:3000"]
    

    
   
    
}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: '/tmp'
    
}))



// connect to mongo db
const URI = process.env.MONGO_URL;

mongoose.connect(URI, {
   useCreateIndex:true,
   useFindAndModify:false,
   useNewUrlParser:true,
   useUnifiedTopology:true  

},(err)=>{

    if (err) throw err;
    else{
        return console.log(`mongo db connected yes!!!`);
    }



})



app.get("/",(req,res)=>{
    res.send("App is running")
})

app.use('/contact', require('./routes/contactRoute'));
app.use('/user', require('./routes/userRoute'));
app.use('/' ,require('./routes/projectRoute'));
app.use('/', require('./routes/experienceRoute'));
app.use('/', require('./routes/educRoute'));
app.use('/', require('./routes/aboutRoute'));
app.use('/', require('./routes/upload'));





PORT =process.env.PORT || 5000;


// static assets
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>res.sendFile(path.resolve(process.cwd(),'tmp')))
}




app.listen(PORT, ()=>{
    console.log(`server listening on port:${PORT}`);
})


