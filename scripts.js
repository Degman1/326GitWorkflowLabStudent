
let display = document.getElementById('display');

// Append number or operator to the display
function appendToDisplay(value) {

    display.value += value;
}

// Clear the entire display
function clearDisplay() {

    display.value = '';
}

// Delete the last character from the display
function deleteLast() {

    display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
    
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

// TODO: Implement run your functions here

 // Add keyboard support for number input
document.addEventListener("keydown", function(e){
    // number validation
    const numKey = ['0','1','2','3','4','5','6','7','8','9'];
        // if needed ['/', '*', '-', '+', '.', 'Delete', 'Backspace','Enter']
    if(numKey.includes(e.key)){
        e.preventDefault();
        appendToDisplay(e.key);
    }
    

    // if (numKey.includes(e.key)) {
    //     e.preventDefault();

    //     if (e.key === 'Enter') {
    //         calculateResult();
    //     } else if (e.key === 'Backspace' || e.key === 'Delete') {
    //         deleteLast();
    //     } else {
    //         appendToDisplay(e.key);
    //     }
    // } // end-if
});
