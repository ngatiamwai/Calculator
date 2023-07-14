function appendNumber(num) {
    document.getElementById("input").value += num;
}

function appendOperator(operator) {
    document.getElementById("input").value += operator;
}

function clear() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerHTML = "";
}

function calculate() {
    var input = document.getElementById("input").value;
    var result;
    
    try {
        result = eval(input);
        document.getElementById("output").innerHTML = result;
    } catch (error) {
        document.getElementById("output").innerHTML = "Error";
    }
}