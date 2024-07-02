
// Get the display element
const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to evaluate and calculate the expression
function calculate() {
    try {
        display.value = eval(display.value); // Using eval to calculate the expression
    } catch (error) {
        display.value = "Error"; // Handling any errors during evaluation
    }
}

