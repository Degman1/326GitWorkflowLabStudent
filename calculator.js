

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    
    // return the square root of the value
    const a = 1;
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
    if(number === 0){
        return undefined;
    }else{
        return 1/value;
    };
}

// TODO: Implement natural log function
function naturalLog(value) {
    // return the natural log of the value
    return Math.log(value)
}

// TODO: Implement sine function
function sine(value) {
    // return the sine of the value
    return Math.sin(value);
}

// TODO: Implement cosine function
function cosine(value) {
    // return the cosine of the value
    return Math.cos(value);
}

// TODO: Implement tangent function
function tangent(value) {
    // return the tangent of the value
    return Math.tan(value);
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal,
    cosine,
    naturalLog,
};
