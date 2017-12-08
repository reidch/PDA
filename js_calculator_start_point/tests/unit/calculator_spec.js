var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal = 10;
    calculator.add(8);
    assert.equal(calculator.runningTotal, 18);
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 10;
    calculator.subtract(8);
    assert.equal(calculator.runningTotal, 2);
  })

  it('should be able to multiply', function(){
    calculator.previousTotal = 10;
    calculator.multiply(8);
    assert.equal(calculator.runningTotal, 80);
  })

  it('should be able to divide', function(){
    calculator.previousTotal = 80;
    calculator.divide(10);
    assert.equal(calculator.runningTotal, 8);
  })

});
