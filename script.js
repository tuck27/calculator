//variable to store the current input
let currentInput = "";

//Function to update the input display
function updateDisplay() {
    document.getElementById("result").value = currentInput;
}

function Solve(value) {
    if (currentInput === "" && (value === "+" || value === "-" || value === "*" || value === "/")) {
        return;
    }
    currentInput += value;
    updateDisplay();
}

//Function to give result 
function Result() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch(error){
        currentInput = "Error";
        updateDisplay();
    }
}
//Function for backspace
function Back() {
    currentInput = currentInput.slice(0,-1);
    updateDisplay();
}
//Function to clear calculator
