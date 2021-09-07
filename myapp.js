solve.textContent = "";
var number_one;
var number_two;
var operation;

function init(){
    var operation_memory = document.getElementById("operation_memory");
    var solve = document.getElementById("solve");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var root_sqr = document.getElementById("root_sqr");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var minus = document.getElementById("minus");
    var multiplication = document.getElementById("multiplication");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var plus = document.getElementById("plus");
    var division = document.getElementById("division");
    var zero = document.getElementById("zero");
    var double_zero = document.getElementById("double_zero");
    var triple_zero = document.getElementById("triple_zero");
    var c = document.getElementById("c");
    var equal = document.getElementById("equal");

    zero.onclick = function(){ solve.textContent += "0";}
    double_zero.onclick = function(){ solve.textContent += "00";}
    triple_zero.onclick = function(){ solve.textContent += "000";}
    one.onclick = function(){ solve.textContent += "1";}
    two.onclick = function(){ solve.textContent += "2";}
    three.onclick = function(){ solve.textContent += "3";}
    four.onclick = function(){ solve.textContent += "4";}
    five.onclick = function(){ solve.textContent += "5";}
    six.onclick = function(){ solve.textContent += "6";}
    seven.onclick = function(){ solve.textContent += "7";}
    eight.onclick = function(){ solve.textContent += "8";}
    nine.onclick = function(){ solve.textContent += "9";}

    c.onclick = function(){
        reset();
    }

    plus.onclick = function(){
        number_one = solve.textContent;
        operation = "+";
        clean();
    }

    minus.onclick = function(){
        number_one = solve.textContent;
        operation = "-";
        clean();
    }

    division.onclick = function(){
        number_one = solve.textContent;
        operation = "÷";
        clean();
    }

    multiplication.onclick = function(){
        number_one = solve.textContent;
        operation = "*";
        clean();
    }

    root_sqr.onclick = function(){
        number_one = solve.textContent;
        operation = "√";
        operation_memory.textContent += operation + number_one;
        solve.textContent = Math.sqrt( parseFloat(number_one) );
    }

    equal.onclick = function(){
        number_two = solve.textContent;
        solution();
    }
}

function reset(){
    operation_memory.textContent = "";
    solve.textContent = "";
    number_one = 0;
    number_two = 0;
    operation = "";
}

function clean(){
    operation_memory.textContent += number_one + " " + operation;
    solve.textContent = "";
}


function solution(){
    var result = 0;
    switch(operation){
        case "+":
            result = parseFloat(number_one) + parseFloat(number_two);
            break;
        case "-":
            result = parseFloat(number_one) - parseFloat(number_two); 
            break;
        case "÷":
            result = parseFloat(number_one) / parseFloat(number_two); 
            break;    
        case "*":
            result = parseFloat(number_one) * parseFloat(number_two); 
            break;         
    }
    reset();
    solve.textContent = result;
} 