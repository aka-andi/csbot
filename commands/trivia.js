<<<<<<< HEAD
=======

>>>>>>> 1f1a2fced06c4804c21d9d950cf2d0212771a2ca
const parse = require('csv-parse');
const fs = require('fs');
const csvData = [];
const path = require('path');

//read trivia.csv file and create array of array. Inner arrays represents one pair of question and answer
function readFile() {
<<<<<<< HEAD
  fs.createReadStream(path.join('data', 'trivia.csv'))
    .pipe(
      parse({
        delimiter: ','
      })
    )
    .on('data', function (dataRow) {
      csvData.push(dataRow);
    });
=======
    fs.createReadStream(path.join('data', 'trivia.csv'))
        .pipe(
            parse({
                delimiter: ','
            })
        )
        .on('data', function (dataRow) {
            csvData.push(dataRow);
        });
>>>>>>> 1f1a2fced06c4804c21d9d950cf2d0212771a2ca
}

//get random question
function getQuestion() {
<<<<<<< HEAD
  const random = Math.floor(Math.random() * Math.floor(csvData.length));
  return trivia = {
    question: csvData[random][0],
    answer: csvData[random][1]
  }
=======
    const random = Math.floor(Math.random() * Math.floor(csvData.length));
    return trivia = {
        question: csvData[random][0],
        answer: csvData[random][1]
    }
>>>>>>> 1f1a2fced06c4804c21d9d950cf2d0212771a2ca
}

readFile();

// Export functions to the command handler and test file
module.exports = {
<<<<<<< HEAD
  name: 'trivia',
  description: "trivia command",
  readFile: readFile,
  getQuestion: getQuestion,
  csvData: csvData,
  execute(message) {
    const trivia = getQuestion()
    module.exports = trivia;
    message.channel.send({
      embed: {
        title: "CS Trivia!",
        description: trivia.question
      }
    });
  }
=======
    name: 'trivia',
    description: "trivia command",
    readFile: readFile,
    getQuestion: getQuestion,
    csvData: csvData,
    execute(message) {
        const trivia = getQuestion()
        module.exports = trivia;
        message.channel.send({
            embed: {
                title: "CS Trivia!",
                description: trivia.question
            }
        });
    }
>>>>>>> 1f1a2fced06c4804c21d9d950cf2d0212771a2ca
}
