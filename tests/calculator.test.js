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

describe('Testing sin(0) == 0', function() {
    const res = calculator.sine(0);
    it('should return a value close to 0 within 1e-6', function() {
        assert(res < 1e-6);
    });
});

describe('Testing sin(pi/2) == 1', function() {
    const res = calculator.sine(Math.PI/2.0);
    it('should return a value close to 1 within 1e-6', function() {
        assert(Math.abs(res -1) < 1e-6);
    });
});

describe('Testing sin(pi) == 0', function() {
    const res = calculator.sine(Math.PI);
    it('should return a value close to 0 within 1e-6', function() {
        assert(res < 1e-6);
    });
});

describe('Testing sin(2pi) == 0', function() {
    const res = calculator.sine(0);
    it('should return a value close to 0 within 1e-6', function() {
        assert(res < 1e-6);
    });
});

//cosine

describe('Testing cos(0) == 1', function() {
    const res = calculator.cosine(0);
    it('should return a value close to 0 within 1e-6', function() {
        assert(Math.abs(res -1) < 1e-6);
    });
});

describe('Testing cos(pi/2) == 0', function() {
    const res = calculator.cosine(Math.PI/2.0);
    it('should return a value close to 1 within 1e-6', function() {
        assert(Math.abs(res) < 1e-6);
    });
});

describe('Testing cos(pi) == -1', function() {
    const res = calculator.cosine(Math.PI);
    it('should return a value close to 0 within 1e-6', function() {
        assert(Math.abs(res + 1) < 1e-6);
    });
});


//tangent

describe('Testing tan(0) == 0', function() {
    const res = calculator.tangent(Math.PI);
    it('should return a value close to 0 within 1e-6', function() {
        assert(Math.abs(res) < 1e-6);
    });
});

describe('Calculator Square Function', function () {
    const res = calculator.calculateSquare(4);
    it('should return 16', function() {
        assert.strictEqual(res, 16);
    });
});