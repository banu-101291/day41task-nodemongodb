const env = require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/book');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const port= process.env.PORT || 5000;


mongoose.connect(process.env.DB_URL)
.then(()=>{
  console.log('DB connected')
}).catch((error) =>{
  console.log(error)
})
  




app.get('/', (req, res) => {
    res.send(" Get Method"); 
})

app.use('/books', booksRoute);

app.listen(port,() =>{
  console.log("server start")
});