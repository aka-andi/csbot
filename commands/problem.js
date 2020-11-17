//npm install -save csv-parse
const parse = require('csv-parse');
const fs = require('fs');
const csvData = [];
const path = require('path');

//fs.createReadStream(path.join('../data', 'leetcode.csv'))
fs.createReadStream(path.join('data', 'leetcode.csv'))
    .pipe(
        parse({
            delimiter: ','
        })
    )
    .on('data', function (dataRow) {
        csvData.push(dataRow);
    })
    .on('end', function () {
        //console.log(csvData);
    });


module.exports = {
<<<<<<< HEAD
    name: 'problem',
    description: "problem command",
<<<<<<< HEAD
    execute(message, args){
        message.channel.send('This command returns a random LeetCode problem.');
=======
  name: 'problem',
  description: "problem command",
  execute(message) {
    const random = Math.floor(Math.random()* Math.floor(csvData.length));
    const problem = {
      
      // name: 'Two Sum',
      // text: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. ' +
      // 'You may assume that each input would have exactly one solution, and you may not use the same element twice. ' +
      // 'You can return the answer in any order.\nExample 1:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]' +
      // '\nOutput: Because nums[0] + nums[1] == 9, we return [0, 1].',
      // link: 'https://leetcode.com/problems/two-sum/',
      // solution: 'https://leetcode.com/problems/two-sum/solution/'
      
      name: csvData[random][0],
      text: csvData[random][1],
      link: csvData[random][2],
      solution: csvData[random][3]


>>>>>>> 6bce4d04efa81a2508b883c700e7a49114e55b8c
=======
    execute(message) {
        const random = Math.floor(Math.random() * Math.floor(csvData.length));
        const problem = {

            // name: 'Two Sum',
            // text: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. ' +
            // 'You may assume that each input would have exactly one solution, and you may not use the same element twice. ' +
            // 'You can return the answer in any order.\nExample 1:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]' +
            // '\nOutput: Because nums[0] + nums[1] == 9, we return [0, 1].',
            // link: 'https://leetcode.com/problems/two-sum/',
            // solution: 'https://leetcode.com/problems/two-sum/solution/'

            name: csvData[random][0],
            text: csvData[random][1],
            link: csvData[random][2],
            solution: csvData[random][3]


        }
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
>>>>>>> 1f1a2fced06c4804c21d9d950cf2d0212771a2ca
    }
}