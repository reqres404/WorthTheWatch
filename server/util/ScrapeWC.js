const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
let data = {
    title:"",
    genre:"",
    desc:""
}

const ScrapeWC = async (query) =>{
    try {
        var url = `https://en.wikipedia.org/wiki/${query}`

        let res = await axios.get(url)
        let $ = await cheerio.load(res.data)

        const title = $("#firstHeading").text()
        const genre = $("#mw-content-text > div.mw-parser-output > table.infobox.vevent > tbody > tr:nth-child(3) > td").text()        
        const desc = $("#mw-content-text > div.mw-parser-output > p").text().substring(0,350)
        data.desc = desc
        data.genre = genre
        data.title = title
        console.log(data)
    

    } catch (e) {
        console.log(e)
    }
    console.log(data)
    return data
    
}

module.exports={ScrapeWC}