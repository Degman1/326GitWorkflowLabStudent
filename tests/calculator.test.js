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
    const res = calculator.calculateSquareRoot(9);
    it('should return 3', function() {
        assert.strictEqual(res, 3);
    });
});

describe('Calculate Square', function() {
    const res = calculator.calculateSquare(9);
    it('should return 81', function() {
        assert.strictEqual(res, 81);
    });
});