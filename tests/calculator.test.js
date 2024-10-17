const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});


// Add your tests here
describe('Calculator Calculation Functions', function() {
    //Test Cosine Function
    const cos1 = calculator.cosine(0);
    const cos2 = calculator.cosine(Math.PI/3);
    it('should return 1', function() {
        assert.strictEqual(cos1, 1);
    });
});
describe('Calculator Calculation Functions', function() {
    //Test Cosine Function
    const log = calculator.naturalLog(1);
    //const log2 = calculator.naturalLog(3);
    it('should return 1', function() {
        assert.strictEqual(log, 0);
    });
});