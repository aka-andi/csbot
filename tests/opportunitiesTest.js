

// Chai test fil for the opportunities scraper script
var expect = require('chai').expect;
var opportunities = require('../opportunities');

// add 2 opportunities for initial "scrape"
let data = [];
let op1 = { title: "title 1", link: "/rc/clk?jk=cid=6&vjs=3" };
let op2 = { title: "title 2", link: "/rc/clk?jk=cid=8&vjs=2" };
data.push(op1);
data.push(op2);

// 3 test cases to check the filter() function
describe('opportunities -> filter(data)', function () {
  it('should start with an empty storedData list', function () {
    expect(opportunities.getStoredData()).to.be.empty;
  });
  it('should populate storedData', function () {
    opportunities.filter(data);
    expect(opportunities.getStoredData()).to.equal(data);
  });
  it('should filter previously stored data', function () {
    let update = { title: "title 3", link: "/rc/clk?jk=cid=19&vjs=1" };
    let data2 = [];
    data2.push(op1);
    data2.push(op2);
    data2.push(update);
    let output = opportunities.filter(data2)[0];
    expect(output).to.equal(update);
  });
});