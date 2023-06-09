const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    key: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


//ouverture du compte demandeur
exports.registrer = (req, res)=>{
    console.log(req.body);

    const {name, email, password, passwordconfirm} = req.body;
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results)=>{
        if(error){
           console.log(error)
       }
       if(results.length > 0){
           return res.render('registrer', {
                message : 'le compte existe'
               })
           }else if(password !== passwordconfirm){
               return res.render('registrer', {
                   message : 'mot de passe incorrect'
               })
           }
           let hashedPassword = await bcrypt.hash(password, 8);
           console.log(hashedPassword);
       db.query('INSERT INTO users SET ?', {nom: name, email: email, password: hashedPassword}, (error, results)=>{
           if(error){
               console.log(error)
           }else{
               console.log(results)
               return res.render('registrer',{
                   message: `vous êtes enregistré`
               })
           }
       })
       })

}

