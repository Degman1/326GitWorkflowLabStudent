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
    it('should return 3 for the square root of 9', function() {
        const res = calculator.calculateSquareRoot(9);
        assert.strictEqual(res, 3);
    });
});


// Add your tests here

describe('Calculate tangent function', function() {
    const res = calculator.tangent(0);
    it('should return 0', function() {
        assert.strictEqual(res, 0);
    });

    const res1 = calculator.tangent(45);
    it('should return 1.6197751905438615', function() {
        assert.strictEqual(res1, 1.6197751905438615);
    });

// Test cosine function
describe('Calculator Cosine Function', function() {
    it('should return 1', function() {
        assert.strictEqual(calculator.cosine(0), 1);
    });

    it('should return -1', function() {
        assert.strictEqual(calculator.cosine(Math.PI), -1);
    });
});

