var expect = require('chai').expect; 
var opportunities = require('../opportunities'); 
describe('opportunities()', function () { 
  it('should start with status = OFF', function () { 
    expect(opportunities.getStatus()).to.be.false;
  }); 
  it('should toggle the alert status', function () { 
    expect(opportunities.toggleStatus()).to.be.true;
  }); 
});