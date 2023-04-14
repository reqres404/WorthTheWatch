const cheerio = require('cheerio');

const $ = cheerio.load(
  `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>`
);

const nextItem = $('li:second').next().text()

console.log(nextItem)