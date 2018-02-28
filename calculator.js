//capture input
// var getNum = document.getElementsByClassName('num');

// function display(numEle) {
//     console.log(numEle.innerHTML)
//     document.getElementById('result').innerHTML += numEle.innerHTML;
// }
// Array.from(getNum).forEach(function(val){
// val.addEventListener("click", display.bind(this, val))
// })

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

var clearResults = document.getElementById('clear');
clearResults.addEventListener("click", displayClear);
function displayClear() {
    document.getElementById('result').innerHTML = '';
}

var equals = document.getElementById('equals');
equals.addEventListener("click", displayEquals);
function displayEquals() {
    document.getElementById('result').innerHTML += equals.innerHTML;
}

// var back = document.getElementById('BACK');
// back.addEventListener("click", displayBack);
// function displayBack() {
//     document.getElementById('result').innerHTML += back.innerHTML;
// }

var numOne = [];
var numTwo = [];
var total = 0;



var entries = [];
var total = 0;

var temp = '';
$("button").on('click', function() {
 	var val = $(this).text();

  // Got a number, add to temp
  if (!isNaN(val) || val === '.') {
    temp += val;
    $("#answer").val(temp.substring(0,10));
    
  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
  } else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')

  // Clear last entry
  } else if (val === 'CE') {
    temp = '';
    $("#answer").val('')
    
  // Change multiply symbol to work with eval
  } else if (val === 'x') {
    entries.push(temp);
    entries.push('*');
    temp = '';
    
  // Change divide symbol to work with eval
  } else if (val === '÷') {
    entries.push(temp);
    entries.push('/');
    temp = '';

  // Got the equals sign, perform calculation
  } else if (val === '=') {
  	entries.push(temp);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      
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
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});







