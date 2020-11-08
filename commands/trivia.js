
const parse = require('csv-parse');
const fs = require('fs');
const csvData = []; 
const path = require('path');
//const random = Math.floor(Math.random()* Math.floor(csvData.length));
//{const r = random};

//read trivia.csv file and create array of arrasy. Inner arrays represents one pair of question and answer
//fs.createReadStream('/Users/brendahenriquez/Desktop/cs321/csbot/data/trivia.csv')
fs.createReadStream(path.join('data', 'trivia.csv'))
  .pipe(
      parse({
        delimiter: ','
      })
  )
  .on('data', function(dataRow){
      csvData.push(dataRow);
  })
  .on('end', function(){
    //console.log(csvData);
  });
  
  

module.exports = {  
  name: 'trivia',
  description: "trivia command",
  execute(message, args) {
    //console.log(csvData[8][1]);
    //get random question
    const random = Math.floor(Math.random()* Math.floor(csvData.length));
    const trivia = {
      
      question: csvData[random][0],
      answer: csvData[random][1]
    }
    module.exports = trivia;
    message.channel.send({
      embed: {
        title: "CS Trivia!",
        description: trivia.question
      }
    });
  }
}
