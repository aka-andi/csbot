//npm install -save csv-parse
const parse = require('csv-parse');
const fs = require('fs');
const csvData = [];
const path = require('path');

function readFile() {

    //fs.createReadStream(path.join('../data', 'leetcode.csv'))
    fs.createReadStream(path.join('data', 'leetcode.csv'))
        .pipe(
            parse({
                delimiter: ','
            })
        )
        .on('data', function (dataRow) {
            csvData.push(dataRow);
        });
}

function getProblem() {
    const random = Math.floor(Math.random() * Math.floor(csvData.length));
    return  problem = {
        name: csvData[random][0],
        text: csvData[random][1],
        link: csvData[random][2],
        solution: csvData[random][3]
    }
}

readFile();

module.exports = {
    name: 'problem',
    description: "problem command",
    readFile: readFile,
    getProblem: getProblem,
    csvData: csvData,
    execute(message) {
        module.exports = problem;
        message.channel.send({
            embed: {
                title: "Coding Interview Practice!",
                fields: [{
                    name: problem.name,
                    value: problem.text
                }],
                description: '[View Problem on LeetCode](' + problem.link + ')'
            }
        });
    }
}
