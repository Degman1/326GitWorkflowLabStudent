

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    
    // return the square root of the value
}

// TODO: Implement square function
function calculateSquare(value) {
    // Hint: Use exponentiation
    // return the square root of the value

}

// TODO: FIX reciprocal function
function calculateReciprocal() {
    // Hint: Reciprocal is 1/x
    // return the square root of the value
    let value = document.getElementById("display");
    if (value === 0) {
        throw new Error("Can't divide by zero");
    }
    value = 1/value;
}

// TODO: Implement natural log function
function naturalLog(value) {
    // return the natural log of the value
}

// TODO: Implement sine function
function sine(value) {
    // return the sine of the value
}

// TODO: Implement cosine function
function cosine(value) {
    // return the cosine of the value
}

// TODO: Implement tangent function
function tangent(value) {
    // return the tangent of the value
    return Math.tan(value);
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal
};
