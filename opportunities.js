const puppeteer = require("puppeteer");
var fs = require("fs");
(async () => {
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
                jobArr[i] = {
                    title: (text.indexOf("\n") > 0) ? text.substring(0, text.indexOf("\n")) : text,
                    link: html.substring((html.indexOf("href=") + 6), (html.indexOf("onmousedown") - 2))
                };
            }
            return jobArr;
        });
        await browser.close();
        fs.writeFile("opportunities.json", JSON.stringify(data), function (err) {
            if (err) throw err;
            console.log("Saved!");
        });
        console.log("Browser Closed");
    } catch (err) {
        console.log(err);
        await browser.close();
        console.log("Browser Closed");
    }
})();



/*const op1 = {
  name: 'Software Engineer Intern/Co-op (Herndon, VA)',
  link: 'https://www.indeed.com/viewjob?jk=74f53be4da1ae301&from=serp&vjs=3'
}
const op2 = {
  name: 'Software Development Engineer Intern (Summer 2021)',
  link: 'https://www.indeed.com/viewjob?jk=109dd74e9e018229&from=serp&vjs=3'
}
message.channel.send({
  embed: {
    title: "New Career Opportunities!",
    description: "Last updated: " + new Date().toLocaleString(),
    fields: [{
      name: op1.name,
      value: op1.link
    },
    {
      name: op2.name,
      value: op2.link
    }],
  }
});*/