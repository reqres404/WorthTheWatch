const pptr = require('puppeteer')
const url = "https://en.wikipedia.org/wiki/Farzi"
const deats = {
  title:"",
  genre:"",
  desc:"",
  img:""
}
const start = async()=>{
  const browser = await pptr.launch();
  const page = await browser.newPage()
  await page.goto(url)
  const data = await page.$$eval('#bodyContent',(elements)=>elements.map(e=>({
    // tableContent:e.querySelector('.infobox').innerText,
    title:e.querySelector(".mw-parser-output p i").innerText,
    genre:e.querySelector('.mw-parser-output .shortdescription').innerText,
    desc:e.querySelector('.mw-parser-output .description').innerText,
    
  }

  ))
)

  const imgSrc = await page.evaluate(() => {
    const srcs = Array.from(document.querySelectorAll("#bodyContent .infobox-image a"))
    .map((image) => image.getAttribute("href"));
    return srcs;
  });

  var content = {
    data: data,
    imgSrc: imgSrc
  }
  await browser.close()
  // console.log(content)
  return content;
}
const data = async()=>{
  const show = await start()
  deats.title =show.data[0].title 
  deats.genre =show.data[0].genre 
  deats.desc =show.data[0].desc 
  deats.img =show.imgSrc[0]
  console.log(deats)
  return deats
}

module.exports={
  data
}
