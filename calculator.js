let currentInput = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        // Evaluate the expression
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (error) {
        // Handle invalid expression
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}
