function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.innerText.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

function appendDot() {
    const display = document.getElementById('display');
    if (!display.innerText.includes('.')) {
        display.innerText += '.';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}