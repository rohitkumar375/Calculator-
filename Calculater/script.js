const display = document.getElementById("display");

function appendSymbol(symbol) {
    display.value += symbol;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(parseFloat(display.value));
    } catch {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        display.value = Math.pow(parseFloat(display.value), 2);
    } catch {
        display.value = "Error";
    }
}

function calculateInverse() {
    try {
        display.value = 1 / parseFloat(display.value);
    } catch {
        display.value = "Error";
    }
}

function toggleSign() {
    try {
        display.value = parseFloat(display.value) * -1;
    } catch {
        display.value = "Error";
    }
}
