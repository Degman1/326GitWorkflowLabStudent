const { calculateReciprocal } = require('./calculator');
function testCalculateReciprocal() {
    // Test 1: Positive number
    try {
        console.assert(calculateReciprocal(4) === 0.25, `Test 1 Failed: Value does not match expected value`);
        console.log('Passed');
    } catch (e) {
        console.error('Test 1 Failed');
    }


    // Test 3: Division by zero (should throw an error)
    try {
        console.assert(calculateReciprocal(0)===null, 'Test 3 Failed: Value does not match to expected value');
        console.log('Passed');
        }catch(e){console.error('Test 3 Failed');}

}



// Run the tests
testCalculateReciprocal();

