document.addEventListener('DOMContentLoaded', function() {
    var numButtons = document.getElementsByClassName("num")
    for (var i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', display)
    }
})
function display(val) {
var entry = val.target.innerHTML;
document.getElementById("display").innerHTML += entry;
}


var buttons = [
    document.getElementById('button0'),
    document.getElementById('button1'),
    document.getElementById('button2'),
    etc
];

buttons.addEventListener("click", display);
function display() {
for (var i = 0; i < buttons.length; i++) {
    document.getElementById('result').innerHTML += buttons[i].innerHTML;
}

// var getZero = document.getElementById('button0');
// getZero.addEventListener("click", display0);
// function display0() {
//     document.getElementById('result').innerHTML += getZero.innerHTML;
// }

// var getOne = document.getElementById('button1');
// getOne.addEventListener("click", display1);
// function display1() {
//     document.getElementById('result').innerHTML += getOne.innerHTML;
// }

// var getTwo = document.getElementById('button2');
// getTwo.addEventListener("click", display2);
// function display2() {
//     document.getElementById('result').innerHTML += getTwo.innerHTML;
// }

// var getThree = document.getElementById('button3');
// getThree.addEventListener("click", display3);
// function display3() {
//     document.getElementById('result').innerHTML += getThree.innerHTML;
// }

// var getFour = document.getElementById('button4');
// getFour.addEventListener("click", display4);
// function display4() {
//     document.getElementById('result').innerHTML += getFour.innerHTML;
// }

// var getFive = document.getElementById('button5');
// getFive.addEventListener("click", display5);
// function display5() {
//     document.getElementById('result').innerHTML += getFive.innerHTML;
// }

// var getSix = document.getElementById('button6');
// getSix.addEventListener("click", display6);
// function display6() {
//     document.getElementById('result').innerHTML += getSix.innerHTML;
// }

// var getSeven = document.getElementById('button7');
// getSeven.addEventListener("click", display7);
// function display7() {
//     document.getElementById('result').innerHTML += getSeven.innerHTML;
// }

// var getEight = document.getElementById('button8');
// getEight.addEventListener("click", display8);
// function display8() {
//     document.getElementById('result').innerHTML += getEight.innerHTML;
// }

// var getNine = document.getElementById('button9');
// getNine.addEventListener("click", display9);
// function display9() {
//     document.getElementById('result').innerHTML += getNine.innerHTML;
// }

// var getDivide = document.getElementById('divide');
// getDivide.addEventListener("click", displayDivide);
// function displayDivide() {
//     document.getElementById('result').innerHTML += getDivide.innerHTML;
// }

// var getTimes = document.getElementById('times');
// getTimes.addEventListener("click", displayTimes);
// function displayTimes() {
//     document.getElementById('result').innerHTML += getTimes.innerHTML;
// }

// var getPlus = document.getElementById('plus');
// getPlus.addEventListener("click", displayPlus);
// function displayPlus() {
//     document.getElementById('result').innerHTML += getPlus.innerHTML;
// }

// var getMinus = document.getElementById('minus');
// getMinus.addEventListener("click", displayMinus);
// function displayMinus() {
//     document.getElementById('result').innerHTML += getMinus.innerHTML;
// }

// var getPoint = document.getElementById('point');
// getPoint.addEventListener("click", displayPoint);
// function displayPoint() {
//     document.getElementById('result').innerHTML += getPoint.innerHTML;
// }

// var getPower = document.getElementById('power');
// getPower.addEventListener("click", displayPower);
// function displayPower() {
//     document.getElementById('result').innerHTML += getPower.innerHTML;
// }

var clear = document.getElementById('clear');
clear.addEventListener("click", displayClear);
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
    // split expression into an array        
    var expressionArray = expression.split('').join(\d); // '' sets the separation point at each character.
    
    var numLeft = expressionArray[0];
    var operator = expressionArray[1];
    var numRight = expressionArray[2];
    
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
    if (operator === ^) {
    // perform exponent calculation
        for (var i = 0; i < numRight; i++); 
        total = numLeft * numLeft;
    }

    // display results on calculator's screen
    document.getElementById('result').innerHTML = total;
}

/* function calculateTotal() {
    var total = 0;
    var expression = document.getElementById('result').innerHTML;
    console.log(expression);
    expression = expression.split('x', '+', '-', ÷);
    total = eval(equation);
    document.getElementById('result').innerHTML = total;
} */



var entries = [];
var total = 0;

var hold = '';
// $("button").on('click', function() {
//  	var val = $(this).text();

  if (!isNaN(val) || val === '.') {
    hold += val;
    document.getElementById('result').innerHTML = hold;
    // $("#answer").val(temp.substring(0,10));
    
  // then add our current symbol and clear temp  
  } else if (val === 'C') {
    entries = [];
    hold = '';
    total = 0;
    // $("#answer").val('')

  } else if (val === 'BACK') {
    hold = '';
    // document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.slice(0, -1);
    $("#answer").val('')

  } else if (val === '=') {
  	entries.push(hold);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === 'x') { nt *= nextNum; } 
      else if (symbol === '÷') { nt /= nextNum; }
      
      i++;
    }
    
    // Swap the '-' symbol so text input handles it correctly
    if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);
		entries = [];
    temp = '';
    
  // Push number
  } else {
    entries.push(hold);
    entries.push(val);
    hold = '';
  }
});