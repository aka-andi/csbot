const puppeteer = require("puppeteer");
var storedData = [];

function filter(data) {
    updates = [];
    if (storedData.length == 0) {
        storedData = data;
        return data;
    }
    data.forEach(element => {
        if (!(storedData.some(e => e.link === element.link))) {
            updates.push(element);
        }
    });
    return updates;
}
module.exports = async function scrape() {
    try {
        var browser = await puppeteer.launch({ headless: false });
        var page = await browser.newPage();
        await page.goto(`https://www.indeed.com/jobs?q=software%20engineer%20intern&l=Fairfax%2C%20VA&sort=date`, { waitUntil: 'networkidle2' });
        var data = await page.evaluate(() => {
            var headerList = document.querySelectorAll(`h2.title`);
            var jobArr = [];
            for (var i = 0; i < headerList.length; i++) {
                var text = headerList[i].innerText;
                var html = headerList[i].innerHTML;
                jobArr.push({
                    title: (text.indexOf("\n") > 0) ? text.substring(0, text.indexOf("\n")) : text,
                    link: html.substring((html.indexOf("href=") + 6), (html.indexOf("onmousedown") - 2))
                });
                if (!jobArr[jobArr.length - 1].link.includes("/rc/clk?jk="))
                    jobArr.pop();
            }
            return jobArr;
        });
        await browser.close();
        return filter(data);
    } catch (err) {
        console.log(err);
        await browser.close();
    }
}

