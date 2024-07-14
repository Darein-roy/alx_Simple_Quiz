// arithmetic functions
// Addition
function add(number1, number2){
    return number1 + number2;
}

// Subtraction
function subtract(number1, number2){
    return number1 - number2;
}

// Multiplication
function multiply(number1, number2){
    return number1 * number2;
}

// Division
function divide(number1, number2){
    return number1 / number2;
}

// performing addition
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// performing subtraction
document.getElementById('subtract').addEventListener('click', function(){
    const number1 = parseFloat(document.querySelector('#number1').value) || 0;
    const number2 = parseFloat(document.querySelector('#number2').value) || 0;
    const result = subtract(number1, number2);
    document.querySelector("#calculation-result").textContent = result;
});

// performing multiplication
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// performing division
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});



