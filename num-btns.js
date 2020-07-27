var isResult = false;
var currentInput = "0";
function outOne() {
  if (currentInput == 0 || isResult) {
    currentInput = 1;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "1";
  outputLine(currentInput);
}

function outTwo() {
  if (currentInput == 0 || isResult) {
    currentInput = 2;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "2";
  outputLine(currentInput);
}

function outThree() {
  if (currentInput == 0 || isResult) {
    currentInput = 3;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "3";
  outputLine(currentInput);
}

function outFour() {
  if (currentInput == 0 || isResult) {
    currentInput = 4;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "4";
  outputLine(currentInput);
}

function outFive() {
  if (currentInput == 0 || isResult) {
    currentInput = 5;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "5";
  outputLine(currentInput);
}

function outSix() {
  if (currentInput == 0 || isResult) {
    currentInput = 6;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "6";
  outputLine(currentInput);
}

function outSeven() {
  if (currentInput == "0" || isResult) {
    currentInput = 7;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "7";
  outputLine(currentInput);
}

function outEight() {
  if (currentInput == "0" || isResult) {
    currentInput = 8;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "8";
  outputLine(currentInput);
}

function outNine() {
  if (currentInput == "0" || isResult) {
    currentInput = 9;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "9";
  outputLine(currentInput);
}

function outZero() {
  if (currentInput == "0" || isResult) {
    currentInput = 0;
    isResult = false;
    outputLine(currentInput);
    return;
  }
  currentInput = currentInput + "0";
  outputLine(currentInput);
}

function outClear() {
  currentInput = 0;
  isResult = false;
  outputLine(currentInput);
}

function outPlus() {
  if (currentInput == "0") {
    return;
  }
  isResult = false;
  currentInput = currentInput + " + ";
  outputLine(currentInput);
}

function outMinus() {
  if (currentInput == "0") {
    return;
  }
  isResult = false;
  currentInput = currentInput + " - ";
  outputLine(currentInput);
}

function outMult() {
  if (currentInput == "0") {
    return;
  }
  isResult = false;
  currentInput = currentInput + " * ";
  outputLine(currentInput);
}

function outDiv() {
  if (currentInput == "0") {
    return;
  }
  isResult = false;
  currentInput = currentInput + " / ";
  outputLine(currentInput);
}

function outResult() {
  const arr = currentInput.toString().split(" ");
  var result = 0;
  if (arr.length > 3) {
    alert("It doesnt work for now!");
    currentInput = "0";
    outputLine(currentInput);
    return;
  }
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] == "+") {
        if (i == arr.length - 2 && i != 1) {
          result += parseInt(arr[i + 1]);
          break;
        }
        result += parseInt(arr[i - 1]) + parseInt(arr[i + 1]);
      }

      if (arr[i] == "-") {
        if (i == arr.length - 2 && i != 1) {
          result -= parseInt(arr[i + 1]);
          break;
        }
        result += parseInt(arr[i - 1]) - parseInt(arr[i + 1]);
      }

      if (arr[i] == "*") {
        if (i == arr.length - 2 && i != 1) {
          result *= parseInt(arr[i + 1]);
          break;
        }
        result += parseInt(arr[i - 1]) * parseInt(arr[i + 1]);
      }

      if (arr[i] == "/") {
        if (i == arr.length - 2 && i != 1) {
          result /= parseInt(arr[i + 1]);
          break;
        }
        result += parseInt(arr[i - 1]) / parseInt(arr[i + 1]);
      }
    }
    isResult = true;
    currentInput = result;
    outputLine(currentInput);
  
}

oneBtn.addEventListener("click", outOne);
twoBtn.addEventListener("click", outTwo);
threeBtn.addEventListener("click", outThree);
fourBtn.addEventListener("click", outFour);
fiveBtn.addEventListener("click", outFive);
sixBtn.addEventListener("click", outSix);
sevenBtn.addEventListener("click", outSeven);
eightBtn.addEventListener("click", outEight);
nineBtn.addEventListener("click", outNine);
zeroBtn.addEventListener("click", outZero);
clearLine.addEventListener("click", outClear);
addBtn0.addEventListener("click", outPlus);
subtractBtn0.addEventListener("click", outMinus);
multiplyBtn0.addEventListener("click", outMult);
divideBtn0.addEventListener("click", outDiv);
resultBtn.addEventListener("click", outResult);
