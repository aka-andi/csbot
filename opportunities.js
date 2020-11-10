var storedData = [];
const url = "https://www.indeed.com/jobs?q=software%20engineer%20intern&l=Fairfax%2C%20VA&sort=date";

const axios = require("axios");
const cheerio = require("cheerio");

function filter(data) {
    updates = [];
    if (storedData.length == 0) {
        storedData = data;
        return data;
    }
    data.forEach(element => {
        if ((element.link.indexOf("rc/clk?") > 0) && !(storedData.some(e => e.link === element.link))) {
            updates.push(element);
        }
    });
    return updates;
}
module.exports = async function scrape() {
    try {
        const html = await axios.get(url);
        const $ = await cheerio.load(html.data);
        var jobArr = [];
        $('h2.title').each((i, elem) => {
            let rawTitle = ($(elem).text()).substring(2);
            jobArr.push({
                title: rawTitle.substring(0, rawTitle.indexOf('\n')),
                link: $(elem).find('a').attr('href')
            })
        });
        return filter(jobArr);
    } catch (err) {
        console.log(err);
    }
}

