if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Kotculator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kotculator'.");
}
var Kotculator = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toString = Kotlin.toString;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var Math_0 = Math;
  var ensureNotNull = Kotlin.ensureNotNull;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Unit = Kotlin.kotlin.Unit;
  Calculator$Operation$Add.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Add.prototype.constructor = Calculator$Operation$Add;
  Calculator$Operation$Subtract.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Subtract.prototype.constructor = Calculator$Operation$Subtract;
  Calculator$Operation$Multiply.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Multiply.prototype.constructor = Calculator$Operation$Multiply;
  Calculator$Operation$Divide.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Divide.prototype.constructor = Calculator$Operation$Divide;
  Calculator$Operation$Exponent.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Exponent.prototype.constructor = Calculator$Operation$Exponent;
  Calculator$Operation$Sin.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Sin.prototype.constructor = Calculator$Operation$Sin;
  Calculator$Operation$Cos.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Cos.prototype.constructor = Calculator$Operation$Cos;
  Calculator$Operation$Tan.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Tan.prototype.constructor = Calculator$Operation$Tan;
  Calculator$Operation$ASin.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$ASin.prototype.constructor = Calculator$Operation$ASin;
  Calculator$Operation$ACos.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$ACos.prototype.constructor = Calculator$Operation$ACos;
  Calculator$Operation$ATan.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$ATan.prototype.constructor = Calculator$Operation$ATan;
  Calculator$Operation$Reciprocal.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$Reciprocal.prototype.constructor = Calculator$Operation$Reciprocal;
  Calculator$Operation$SquareRoot.prototype = Object.create(Calculator$Operation.prototype);
  Calculator$Operation$SquareRoot.prototype.constructor = Calculator$Operation$SquareRoot;
  function Calculator() {
    this.workingNum_0 = '0';
    this.memorySpots_0 = Kotlin.newArray(7, null);
    this.memorySpotsFull_0 = Kotlin.booleanArray(7);
  }
  function Calculator$Operation() {
  }
  function Calculator$Operation$Add(firstVal) {
    Calculator$Operation.call(this);
    this.firstVal = firstVal;
  }
  Calculator$Operation$Add.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Add',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$Subtract(firstVal) {
    Calculator$Operation.call(this);
    this.firstVal = firstVal;
  }
  Calculator$Operation$Subtract.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Subtract',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$Multiply(firstVal) {
    Calculator$Operation.call(this);
    this.firstVal = firstVal;
  }
  Calculator$Operation$Multiply.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multiply',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$Divide(firstVal) {
    Calculator$Operation.call(this);
    this.firstVal = firstVal;
  }
  Calculator$Operation$Divide.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Divide',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$Exponent(firstVal) {
    Calculator$Operation.call(this);
    this.firstVal = firstVal;
  }
  Calculator$Operation$Exponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Exponent',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$Sin() {
    Calculator$Operation.call(this);
  }
  Calculator$Operation$Sin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sin',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$Cos() {
    Calculator$Operation.call(this);
  }
  Calculator$Operation$Cos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cos',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$Tan() {
    Calculator$Operation.call(this);
  }
  Calculator$Operation$Tan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tan',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$ASin() {
    Calculator$Operation.call(this);
  }
  Calculator$Operation$ASin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ASin',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$ACos() {
    Calculator$Operation.call(this);
  }
  Calculator$Operation$ACos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ACos',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$ATan() {
    Calculator$Operation.call(this);
  }
  Calculator$Operation$ATan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATan',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$Reciprocal() {
    Calculator$Operation.call(this);
  }
  Calculator$Operation$Reciprocal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reciprocal',
    interfaces: [Calculator$Operation]
  };
  function Calculator$Operation$SquareRoot() {
    Calculator$Operation.call(this);
  }
  Calculator$Operation$SquareRoot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SquareRoot',
    interfaces: [Calculator$Operation]
  };
  Calculator$Operation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Operation',
    interfaces: []
  };
  Calculator.prototype.eval_85s0yx$ = function (secondVal, op) {
    if (Kotlin.isType(op, Calculator$Operation$Add))
      this.workingNum_0 = (op.firstVal + secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$Subtract))
      this.workingNum_0 = (op.firstVal - secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$Multiply))
      this.workingNum_0 = (op.firstVal * secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$Divide))
      this.workingNum_0 = (op.firstVal / secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$Exponent)) {
      var $receiver = op.firstVal;
      this.workingNum_0 = Math_0.pow($receiver, secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$Sin)) {
      this.workingNum_0 = Math_0.sin(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$Cos)) {
      this.workingNum_0 = Math_0.cos(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$Tan)) {
      this.workingNum_0 = Math_0.tan(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$ASin)) {
      this.workingNum_0 = Math_0.asin(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$ACos)) {
      this.workingNum_0 = Math_0.acos(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$ATan)) {
      this.workingNum_0 = Math_0.atan(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$Reciprocal))
      this.workingNum_0 = (1 / secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$SquareRoot)) {
      this.workingNum_0 = Math_0.sqrt(secondVal).toString();
    }
     else
      Kotlin.noWhenBranchMatched();
  };
  Calculator.prototype.clearEntry = function () {
    this.workingNum_0 = '0';
  };
  Calculator.prototype.getWorkingNum = function () {
    return this.workingNum_0;
  };
  Calculator.prototype.isMemorySpotFull_za3lpa$ = function (spot) {
    return this.memorySpotsFull_0[spot];
  };
  Calculator.prototype.setMemorySpot_za3lpa$ = function (spot) {
    this.memorySpots_0[spot] = this.workingNum_0;
    this.memorySpotsFull_0[spot] = true;
  };
  Calculator.prototype.clearMemorySpot_za3lpa$ = function (spot) {
    this.workingNum_0 = toString(this.memorySpots_0[spot]);
    this.memorySpotsFull_0[spot] = false;
  };
  Calculator.prototype.enterNextNumber_za3lpa$ = function (nextNumber) {
    if (startsWith(this.workingNum_0, '0') && !startsWith(this.workingNum_0, '0.') || isNaN_0(toDouble(this.workingNum_0)) || isInfinite(toDouble(this.workingNum_0))) {
      this.workingNum_0 = nextNumber.toString();
    }
     else if (startsWith(this.workingNum_0, '-0') && !startsWith(this.workingNum_0, '-0.')) {
      this.workingNum_0 = '-' + nextNumber.toString();
    }
     else {
      this.workingNum_0 = this.workingNum_0 + nextNumber.toString();
    }
  };
  Calculator.prototype.enterDecimal = function () {
    if (!contains(this.workingNum_0, '.')) {
      this.workingNum_0 = this.workingNum_0 + '.';
    }
  };
  Calculator.prototype.flipSign = function () {
    if (startsWith(this.workingNum_0, '-')) {
      this.workingNum_0 = this.workingNum_0.substring(1);
    }
     else {
      this.workingNum_0 = '-' + this.workingNum_0;
    }
  };
  Calculator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Calculator',
    interfaces: []
  };
  function main$clearOperation(closure$operation) {
    return function () {
      closure$operation.v = new Calculator$Operation$Add(0.0);
    };
  }
  function main$clear(closure$clearOperation, closure$calc) {
    return function () {
      closure$clearOperation();
      closure$calc.clearEntry();
    };
  }
  function main$refreshDisplay(closure$calc, closure$display) {
    return function () {
      ensureNotNull(closure$display).innerHTML = '<h1>' + closure$calc.getWorkingNum() + '<\/h1>';
    };
  }
  function main$pressMemoryButton(closure$calc, closure$refreshDisplay) {
    return function (spot, button) {
      if (closure$calc.isMemorySpotFull_za3lpa$(spot)) {
        closure$calc.clearMemorySpot_za3lpa$(spot);
        button.className = replace(button.className, 'btn-success', 'btn-danger', true);
      }
       else {
        closure$calc.setMemorySpot_za3lpa$(spot);
        button.className = replace(button.className, 'btn-danger', 'btn-success', true);
      }
      closure$refreshDisplay();
    };
  }
  function main$lambda(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(0, ensureNotNull(document.getElementById('Ibutton')));
      return Unit;
    };
  }
  function main$lambda_0(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(1, ensureNotNull(document.getElementById('IIbutton')));
      return Unit;
    };
  }
  function main$lambda_1(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(2, ensureNotNull(document.getElementById('IIIbutton')));
      return Unit;
    };
  }
  function main$lambda_2(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(3, ensureNotNull(document.getElementById('IVbutton')));
      return Unit;
    };
  }
  function main$lambda_3(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(4, ensureNotNull(document.getElementById('Vbutton')));
      return Unit;
    };
  }
  function main$lambda_4(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(5, ensureNotNull(document.getElementById('VIbutton')));
      return Unit;
    };
  }
  function main$lambda_5(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(6, ensureNotNull(document.getElementById('VIIbutton')));
      return Unit;
    };
  }
  function main$pressNumberButton(closure$calc, closure$refreshDisplay) {
    return function (nextNumber) {
      closure$calc.enterNextNumber_za3lpa$(nextNumber);
      closure$refreshDisplay();
    };
  }
  function main$lambda_6(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(1);
      return Unit;
    };
  }
  function main$lambda_7(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(2);
      return Unit;
    };
  }
  function main$lambda_8(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(3);
      return Unit;
    };
  }
  function main$lambda_9(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(4);
      return Unit;
    };
  }
  function main$lambda_10(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(5);
      return Unit;
    };
  }
  function main$lambda_11(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(6);
      return Unit;
    };
  }
  function main$lambda_12(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(7);
      return Unit;
    };
  }
  function main$lambda_13(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(8);
      return Unit;
    };
  }
  function main$lambda_14(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(9);
      return Unit;
    };
  }
  function main$lambda_15(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(0);
      return Unit;
    };
  }
  function main$lambda_16(closure$clear, closure$refreshDisplay) {
    return function (it) {
      closure$clear();
      closure$refreshDisplay();
      return Unit;
    };
  }
  function main$lambda_17(closure$calc, closure$refreshDisplay) {
    return function (it) {
      closure$calc.clearEntry();
      closure$refreshDisplay();
      return Unit;
    };
  }
  function main$doubleNumOperationButton(closure$operation, closure$calc, closure$refreshDisplay) {
    return function (op) {
      closure$operation.v = op;
      closure$calc.clearEntry();
      closure$refreshDisplay();
    };
  }
  function main$singleNumOperationButton(closure$operation, closure$calc, closure$clearOperation, closure$refreshDisplay) {
    return function (op) {
      closure$operation.v = op;
      closure$calc.eval_85s0yx$(toDouble(closure$calc.getWorkingNum()), closure$operation.v);
      closure$clearOperation();
      closure$refreshDisplay();
    };
  }
  function main$lambda_18(closure$calc, closure$doubleNumOperationButton) {
    return function (it) {
      closure$doubleNumOperationButton(new Calculator$Operation$Add(toDouble(closure$calc.getWorkingNum())));
      return Unit;
    };
  }
  function main$lambda_19(closure$calc, closure$doubleNumOperationButton) {
    return function (it) {
      closure$doubleNumOperationButton(new Calculator$Operation$Subtract(toDouble(closure$calc.getWorkingNum())));
      return Unit;
    };
  }
  function main$lambda_20(closure$calc, closure$doubleNumOperationButton) {
    return function (it) {
      closure$doubleNumOperationButton(new Calculator$Operation$Multiply(toDouble(closure$calc.getWorkingNum())));
      return Unit;
    };
  }
  function main$lambda_21(closure$calc, closure$doubleNumOperationButton) {
    return function (it) {
      closure$doubleNumOperationButton(new Calculator$Operation$Divide(toDouble(closure$calc.getWorkingNum())));
      return Unit;
    };
  }
  function main$lambda_22(closure$calc, closure$operation, closure$clearOperation, closure$refreshDisplay) {
    return function (it) {
      closure$calc.eval_85s0yx$(toDouble(closure$calc.getWorkingNum()), closure$operation.v);
      closure$clearOperation();
      closure$refreshDisplay();
      return Unit;
    };
  }
  function main$lambda_23(closure$singleNumOperationButton) {
    return function (it) {
      closure$singleNumOperationButton(new Calculator$Operation$Sin());
      return Unit;
    };
  }
  function main$lambda_24(closure$singleNumOperationButton) {
    return function (it) {
      closure$singleNumOperationButton(new Calculator$Operation$Cos());
      return Unit;
    };
  }
  function main$lambda_25(closure$singleNumOperationButton) {
    return function (it) {
      closure$singleNumOperationButton(new Calculator$Operation$Tan());
      return Unit;
    };
  }
  function main$lambda_26(closure$singleNumOperationButton) {
    return function (it) {
      closure$singleNumOperationButton(new Calculator$Operation$ASin());
      return Unit;
    };
  }
  function main$lambda_27(closure$singleNumOperationButton) {
    return function (it) {
      closure$singleNumOperationButton(new Calculator$Operation$ACos());
      return Unit;
    };
  }
  function main$lambda_28(closure$singleNumOperationButton) {
    return function (it) {
      closure$singleNumOperationButton(new Calculator$Operation$ATan());
      return Unit;
    };
  }
  function main$lambda_29(closure$singleNumOperationButton) {
    return function (it) {
      closure$singleNumOperationButton(new Calculator$Operation$Reciprocal());
      return Unit;
    };
  }
  function main$lambda_30(closure$calc, closure$doubleNumOperationButton) {
    return function (it) {
      closure$doubleNumOperationButton(new Calculator$Operation$Exponent(toDouble(closure$calc.getWorkingNum())));
      return Unit;
    };
  }
  function main$lambda_31(closure$singleNumOperationButton) {
    return function (it) {
      closure$singleNumOperationButton(new Calculator$Operation$SquareRoot());
      return Unit;
    };
  }
  function main$lambda_32(closure$calc, closure$refreshDisplay) {
    return function (it) {
      closure$calc.flipSign();
      closure$refreshDisplay();
      return Unit;
    };
  }
  function main$lambda_33(closure$calc, closure$refreshDisplay) {
    return function (it) {
      closure$calc.enterDecimal();
      closure$refreshDisplay();
      return Unit;
    };
  }
  function main() {
    var calc = new Calculator();
    var display = document.getElementById('display');
    var operation = {v: new Calculator$Operation$Add(0.0)};
    var clearOperation = main$clearOperation(operation);
    var clear = main$clear(clearOperation, calc);
    var refreshDisplay = main$refreshDisplay(calc, display);
    var pressMemoryButton = main$pressMemoryButton(calc, refreshDisplay);
    ensureNotNull(document.getElementById('Ibutton')).addEventListener('click', main$lambda(pressMemoryButton));
    ensureNotNull(document.getElementById('IIbutton')).addEventListener('click', main$lambda_0(pressMemoryButton));
    ensureNotNull(document.getElementById('IIIbutton')).addEventListener('click', main$lambda_1(pressMemoryButton));
    ensureNotNull(document.getElementById('IVbutton')).addEventListener('click', main$lambda_2(pressMemoryButton));
    ensureNotNull(document.getElementById('Vbutton')).addEventListener('click', main$lambda_3(pressMemoryButton));
    ensureNotNull(document.getElementById('VIbutton')).addEventListener('click', main$lambda_4(pressMemoryButton));
    ensureNotNull(document.getElementById('VIIbutton')).addEventListener('click', main$lambda_5(pressMemoryButton));
    var pressNumberButton = main$pressNumberButton(calc, refreshDisplay);
    ensureNotNull(document.getElementById('1button')).addEventListener('click', main$lambda_6(pressNumberButton));
    ensureNotNull(document.getElementById('2button')).addEventListener('click', main$lambda_7(pressNumberButton));
    ensureNotNull(document.getElementById('3button')).addEventListener('click', main$lambda_8(pressNumberButton));
    ensureNotNull(document.getElementById('4button')).addEventListener('click', main$lambda_9(pressNumberButton));
    ensureNotNull(document.getElementById('5button')).addEventListener('click', main$lambda_10(pressNumberButton));
    ensureNotNull(document.getElementById('6button')).addEventListener('click', main$lambda_11(pressNumberButton));
    ensureNotNull(document.getElementById('7button')).addEventListener('click', main$lambda_12(pressNumberButton));
    ensureNotNull(document.getElementById('8button')).addEventListener('click', main$lambda_13(pressNumberButton));
    ensureNotNull(document.getElementById('9button')).addEventListener('click', main$lambda_14(pressNumberButton));
    ensureNotNull(document.getElementById('0button')).addEventListener('click', main$lambda_15(pressNumberButton));
    ensureNotNull(document.getElementById('Cbutton')).addEventListener('click', main$lambda_16(clear, refreshDisplay));
    ensureNotNull(document.getElementById('CEbutton')).addEventListener('click', main$lambda_17(calc, refreshDisplay));
    var doubleNumOperationButton = main$doubleNumOperationButton(operation, calc, refreshDisplay);
    var singleNumOperationButton = main$singleNumOperationButton(operation, calc, clearOperation, refreshDisplay);
    ensureNotNull(document.getElementById('+button')).addEventListener('click', main$lambda_18(calc, doubleNumOperationButton));
    ensureNotNull(document.getElementById('-button')).addEventListener('click', main$lambda_19(calc, doubleNumOperationButton));
    ensureNotNull(document.getElementById('xbutton')).addEventListener('click', main$lambda_20(calc, doubleNumOperationButton));
    ensureNotNull(document.getElementById('/button')).addEventListener('click', main$lambda_21(calc, doubleNumOperationButton));
    ensureNotNull(document.getElementById('=button')).addEventListener('click', main$lambda_22(calc, operation, clearOperation, refreshDisplay));
    ensureNotNull(document.getElementById('sinbutton')).addEventListener('click', main$lambda_23(singleNumOperationButton));
    ensureNotNull(document.getElementById('cosbutton')).addEventListener('click', main$lambda_24(singleNumOperationButton));
    ensureNotNull(document.getElementById('tanbutton')).addEventListener('click', main$lambda_25(singleNumOperationButton));
    ensureNotNull(document.getElementById('asinbutton')).addEventListener('click', main$lambda_26(singleNumOperationButton));
    ensureNotNull(document.getElementById('acosbutton')).addEventListener('click', main$lambda_27(singleNumOperationButton));
    ensureNotNull(document.getElementById('atanbutton')).addEventListener('click', main$lambda_28(singleNumOperationButton));
    ensureNotNull(document.getElementById('recipbutton')).addEventListener('click', main$lambda_29(singleNumOperationButton));
    ensureNotNull(document.getElementById('sqbutton')).addEventListener('click', main$lambda_30(calc, doubleNumOperationButton));
    ensureNotNull(document.getElementById('sqrtbutton')).addEventListener('click', main$lambda_31(singleNumOperationButton));
    ensureNotNull(document.getElementById('pnbutton')).addEventListener('click', main$lambda_32(calc, refreshDisplay));
    ensureNotNull(document.getElementById('.button')).addEventListener('click', main$lambda_33(calc, refreshDisplay));
  }
  Calculator$Operation.Add = Calculator$Operation$Add;
  Calculator$Operation.Subtract = Calculator$Operation$Subtract;
  Calculator$Operation.Multiply = Calculator$Operation$Multiply;
  Calculator$Operation.Divide = Calculator$Operation$Divide;
  Calculator$Operation.Exponent = Calculator$Operation$Exponent;
  Calculator$Operation.Sin = Calculator$Operation$Sin;
  Calculator$Operation.Cos = Calculator$Operation$Cos;
  Calculator$Operation.Tan = Calculator$Operation$Tan;
  Calculator$Operation.ASin = Calculator$Operation$ASin;
  Calculator$Operation.ACos = Calculator$Operation$ACos;
  Calculator$Operation.ATan = Calculator$Operation$ATan;
  Calculator$Operation.Reciprocal = Calculator$Operation$Reciprocal;
  Calculator$Operation.SquareRoot = Calculator$Operation$SquareRoot;
  Calculator.Operation = Calculator$Operation;
  _.Calculator = Calculator;
  _.main = main;
  main();
  Kotlin.defineModule('Kotculator', _);
  return _;
}(typeof Kotculator === 'undefined' ? {} : Kotculator, kotlin);
