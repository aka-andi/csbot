// Chai test file for the alerts command module
var expect = require('chai').expect; 
var alerts = require('../commands/alerts'); 

// 2 test cases to check the toggleStatus function
describe('alerts -> toggleStatus()', function () { 
  it('should start with status = OFF', function () { 
    expect(alerts.getStatus()).to.be.false;
  }); 
  it('should toggle the alert status', function () { 
    expect(alerts.toggleStatus()).to.be.true;
  }); 
});