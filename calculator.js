var getZero = document.getElementById('button0');
getZero.addEventListener("click", display0);
function display0() {
    document.getElementById('result').innerHTML += getZero.innerHTML;
}

var getOne = document.getElementById('button1');
getOne.addEventListener("click", display1);
function display1() {
    document.getElementById('result').innerHTML += getOne.innerHTML;
}

var getTwo = document.getElementById('button2');
getTwo.addEventListener("click", display2);
function display2() {
    document.getElementById('result').innerHTML += getTwo.innerHTML;
}

var getThree = document.getElementById('button3');
getThree.addEventListener("click", display3);
function display3() {
    document.getElementById('result').innerHTML += getThree.innerHTML;
}

var getFour = document.getElementById('button4');
getFour.addEventListener("click", display4);
function display4() {
    document.getElementById('result').innerHTML += getFour.innerHTML;
}

var getFive = document.getElementById('button5');
getFive.addEventListener("click", display5);
function display5() {
    document.getElementById('result').innerHTML += getFive.innerHTML;
}

var getSix = document.getElementById('button6');
getSix.addEventListener("click", display6);
function display6() {
    document.getElementById('result').innerHTML += getSix.innerHTML;
}

var getSeven = document.getElementById('button7');
getSeven.addEventListener("click", display7);
function display7() {
    document.getElementById('result').innerHTML += getSeven.innerHTML;
}

var getEight = document.getElementById('button8');
getEight.addEventListener("click", display8);
function display8() {
    document.getElementById('result').innerHTML += getEight.innerHTML;
}

var getNine = document.getElementById('button9');
getNine.addEventListener("click", display9);
function display9() {
    document.getElementById('result').innerHTML += getNine.innerHTML;
}

var getDivide = document.getElementById('divide');
getDivide.addEventListener("click", displayDivide);
function displayDivide() {
    document.getElementById('result').innerHTML += getDivide.innerHTML;
}

var getTimes = document.getElementById('times');
getTimes.addEventListener("click", displayTimes);
function displayTimes() {
    document.getElementById('result').innerHTML += getTimes.innerHTML;
}

var getPlus = document.getElementById('plus');
getPlus.addEventListener("click", displayPlus);
function displayPlus() {
    document.getElementById('result').innerHTML += getPlus.innerHTML;
}

var getMinus = document.getElementById('minus');
getMinus.addEventListener("click", displayMinus);
function displayMinus() {
    document.getElementById('result').innerHTML += getMinus.innerHTML;
}

var getPoint = document.getElementById('point');
getPoint.addEventListener("click", displayPoint);
function displayPoint() {
    document.getElementById('result').innerHTML += getPoint.innerHTML;
}

var getPower = document.getElementById('power');
getPower.addEventListener("click", displayPower);
function displayPower() {
    document.getElementById('result').innerHTML += getPower.innerHTML;
}

var clearResults = document.getElementById('clear');
clearResults.addEventListener("click", displayClear);
function displayClear() {
    document.getElementById('result').innerHTML = '';
}

var back = document.getElementById('BACK');
back.addEventListener("click", goBack);
function goBack() {
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.slice(0, -1);
}

var equals = document.getElementById('equals');
equals.addEventListener("click", calculateTotal);
function calculateTotal() {
    // convert results string to an array
    var expression = [];
    expression = document.getElementById('result').innerHTML;
    // split array at '' and join the numbers
    expression.split('').join(NaN);
    // define number left of operator and number right of operator
    // ??
    // calculate total
    var total = 0;
    if (operator === x) {
        total = numLeft * numRight;
    };
    if (operator === ÷) {
        total = numLeft / numRight;
    };
    if (operator === +) {
        total = numLeft + numRight;
    };
    if (operator === -) {
        total = numLeft - numRight;
    };
    if (operator === +) {
        total = numLeft + numRight;
    };
    if (operator === +) {
        total = numLeft + numRight;
    };
    if (operator === ^) {
    // perform exponent calculation
        for (var i = 0; i < numRight; i++); 
        total = numLeft * numLeft;
    }


}
// function calculateTotal() {
//     var total = 0;
//     var expression = document.getElementById('result').innerHTML;
//     console.log(expression);
//     expression = expression.split('x', '+', '-', );

//   total = eval(equation);

document.getElementById('result').innerHTML = total;
// };











