const {ScrapeWC} = require('../server/util/ScrapeWC')
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const port = 4000 

const data = {}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.get("/data",(req,res)=>{
    const Mdata = async()=>{
        const data = await ScrapeWC()
        res.status(200).json(data)
        console.log(data)
    }
    Mdata()
})
app.get('/search', (req, res) => {
    const query =req.query.q;
    
    console.log(query)
    const Mdata = async()=>{
        const data = await ScrapeWC(query)
        res.status(200).json(data)
        console.log(data)
    }
    Mdata()
    
  });
app.listen(port,()=>console.log("Server is Live"))
