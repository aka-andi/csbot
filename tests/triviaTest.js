// Chai test file for the alerts command module
var expect = require('chai').expect; 
var trivia = require('../commands/trivia'); 

// 2 test cases to check the toggleStatus function
describe('trivia -> getQuestion()', function () { 
  it('should select question', function () { 
    trivia.readFile();
    expect(trivia.getQuestion()).to.not.be.empty;
  }); 
  it('should read file', function () { 
    trivia.readFile();
    expect(trivia.csvData).to.not.be.empty;
  }); 
});