const express = require('express');
const router = express.Router();
const mysql = require("mysql")

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    key: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


router.get('/', (req, res)=>{
    res.send('Bonjour')
})
router.get('/accueil', (req, res)=>{
    res.render('index');
})
router.get('/login', (req, res) =>{
    res.render('login');
})
router.get('/registrer', (req, res)=>{
    res.render('registrer')
})


module.exports = router;