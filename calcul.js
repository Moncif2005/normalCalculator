function appendChar(operation){
    document.calc.display.value += operation;  
}

function clearDisplay(){
    document.calc.display.value = ''
}
function deleteChar(){
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}
function calculateResult(){
    document.calc.display.value = eval(document.calc.display.value)
    const result = new Function('return ' + display)();
        document.calc.display.value = result;
}
function calculatePi() {
    document.calc.display.value += Math.PI;
}