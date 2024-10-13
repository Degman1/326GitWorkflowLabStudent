

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    
    // return the square root of the value
    return Math.sqrt(value);
}

// TODO: Implement square function
function calculateSquare(value) {
    // Hint: Use exponentiation
    // return the square root of the value
    return Math.pow(value, 2);
}

// TODO: FIX reciprocal function
function calculateReciprocal(value) {
    // Hint: Reciprocal is 1/x
    return 1 / value;

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
    let radians = angleInDegrees * (Math.PI / 180);
    return Math.cos(radians);
}

// TODO: Implement tangent function
function tangent(value) {
    let radians = angleInDegrees * (Math.PI / 180);
    return Math.tan(radians);
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal,
    naturalLog,
    sine,
    cosine,
    tangent
};
