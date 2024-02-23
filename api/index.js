const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const router=require('./routes/auth');
const Authrouter=require('./routes/auth');
const cookieParser = require('cookie-parser');
const PORT=process.env.PORT || 5000;
const Chatbot=require('./routes/chatbot');
const bodyParser = require("body-parser");
const DATABASE_URL=process.env.DATABASE_URL;

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use('/',router);
app.use('/auth',Authrouter);
app.use('/chatbot',Chatbot);

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

const db=mongoose.connection;

db.on("close",(error)=>{
    console.log(error);
})

db.once('open',()=>{
    console.log("db working");
})

app.get('/', (req, res) => {
    res.send('hello');
})


app.listen(PORT, () => {
    console.log('database at port: ', PORT);
})

module.exports=app;