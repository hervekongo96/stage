const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const app = express();
const public = path.join(__dirname, './public');
const PORT = process.env.PORT || 5000
 

dotenv.config({path:'./.env'})                 


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    key: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})        
                                
//moteur de templete
app.set('view engine', 'hbs')    

// les routes
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))

//parse url-encode bodies(as sent by HTML forms)
app.use(express.static(public));
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.json());

db.connect((error)=>{
  if(error){ 
      console.log(error)
  }else{
      console.log("connexion établie avec succès!!!")
  }
})
app.listen(PORT, ()=>{
    console.log(`serveur allumer au port ${PORT}`) 
})
