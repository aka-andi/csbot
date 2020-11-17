// Chai test file for the problems scraper script
var expect = require('chai').expect;
var problem = require('../commands/problem');


// 2 test cases to check the toggleStatus function
describe('problem -> geProblem()', function () { 
    it('should select problem', function () { 
      problem.readFile();
      expect(problem.getProblem()).to.not.be.empty;
    }); 
    it('should read file', function () { 
        problem.readFile();
      expect(problem.csvData).to.not.be.empty;
    }); 
  });