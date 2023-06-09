const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    key:'',
    database:'stagiaire'
})

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Masambukid developpeurs!!!")
    }
})

module.exports = db;