if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Kotculator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kotculator'.");
}
var Kotculator = function (_, Kotlin) {
  'use strict';
  var toString = Kotlin.toString;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var equals = Kotlin.equals;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Math_0 = Math;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
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
    this.displayVal_0 = '0';
    this.memorySpots_0 = Kotlin.newArray(7, null);
    this.memorySpotsFull_0 = Kotlin.booleanArray(7);
    this.currentOperation_0 = new Calculator$Operation$Add(0.0);
  }
  Calculator.prototype.getDisplayVal = function () {
    return this.displayVal_0;
  };
  Calculator.prototype.isMemorySpotFull_za3lpa$ = function (spot) {
    return this.memorySpotsFull_0[spot];
  };
  Calculator.prototype.setMemorySpot_za3lpa$ = function (spot) {
    this.memorySpots_0[spot] = this.displayVal_0;
    this.memorySpotsFull_0[spot] = true;
  };
  Calculator.prototype.clearMemorySpot_za3lpa$ = function (spot) {
    this.displayVal_0 = toString(this.memorySpots_0[spot]);
    this.memorySpotsFull_0[spot] = false;
  };
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
    Calculator$Operation$Sin_instance = this;
    Calculator$Operation.call(this);
  }
  Calculator$Operation$Sin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Sin',
    interfaces: [Calculator$Operation]
  };
  var Calculator$Operation$Sin_instance = null;
  function Calculator$Operation$Sin_getInstance() {
    if (Calculator$Operation$Sin_instance === null) {
      new Calculator$Operation$Sin();
    }
    return Calculator$Operation$Sin_instance;
  }
  function Calculator$Operation$Cos() {
    Calculator$Operation$Cos_instance = this;
    Calculator$Operation.call(this);
  }
  Calculator$Operation$Cos.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Cos',
    interfaces: [Calculator$Operation]
  };
  var Calculator$Operation$Cos_instance = null;
  function Calculator$Operation$Cos_getInstance() {
    if (Calculator$Operation$Cos_instance === null) {
      new Calculator$Operation$Cos();
    }
    return Calculator$Operation$Cos_instance;
  }
  function Calculator$Operation$Tan() {
    Calculator$Operation$Tan_instance = this;
    Calculator$Operation.call(this);
  }
  Calculator$Operation$Tan.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Tan',
    interfaces: [Calculator$Operation]
  };
  var Calculator$Operation$Tan_instance = null;
  function Calculator$Operation$Tan_getInstance() {
    if (Calculator$Operation$Tan_instance === null) {
      new Calculator$Operation$Tan();
    }
    return Calculator$Operation$Tan_instance;
  }
  function Calculator$Operation$ASin() {
    Calculator$Operation$ASin_instance = this;
    Calculator$Operation.call(this);
  }
  Calculator$Operation$ASin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ASin',
    interfaces: [Calculator$Operation]
  };
  var Calculator$Operation$ASin_instance = null;
  function Calculator$Operation$ASin_getInstance() {
    if (Calculator$Operation$ASin_instance === null) {
      new Calculator$Operation$ASin();
    }
    return Calculator$Operation$ASin_instance;
  }
  function Calculator$Operation$ACos() {
    Calculator$Operation$ACos_instance = this;
    Calculator$Operation.call(this);
  }
  Calculator$Operation$ACos.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ACos',
    interfaces: [Calculator$Operation]
  };
  var Calculator$Operation$ACos_instance = null;
  function Calculator$Operation$ACos_getInstance() {
    if (Calculator$Operation$ACos_instance === null) {
      new Calculator$Operation$ACos();
    }
    return Calculator$Operation$ACos_instance;
  }
  function Calculator$Operation$ATan() {
    Calculator$Operation$ATan_instance = this;
    Calculator$Operation.call(this);
  }
  Calculator$Operation$ATan.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ATan',
    interfaces: [Calculator$Operation]
  };
  var Calculator$Operation$ATan_instance = null;
  function Calculator$Operation$ATan_getInstance() {
    if (Calculator$Operation$ATan_instance === null) {
      new Calculator$Operation$ATan();
    }
    return Calculator$Operation$ATan_instance;
  }
  function Calculator$Operation$Reciprocal() {
    Calculator$Operation$Reciprocal_instance = this;
    Calculator$Operation.call(this);
  }
  Calculator$Operation$Reciprocal.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Reciprocal',
    interfaces: [Calculator$Operation]
  };
  var Calculator$Operation$Reciprocal_instance = null;
  function Calculator$Operation$Reciprocal_getInstance() {
    if (Calculator$Operation$Reciprocal_instance === null) {
      new Calculator$Operation$Reciprocal();
    }
    return Calculator$Operation$Reciprocal_instance;
  }
  function Calculator$Operation$SquareRoot() {
    Calculator$Operation$SquareRoot_instance = this;
    Calculator$Operation.call(this);
  }
  Calculator$Operation$SquareRoot.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SquareRoot',
    interfaces: [Calculator$Operation]
  };
  var Calculator$Operation$SquareRoot_instance = null;
  function Calculator$Operation$SquareRoot_getInstance() {
    if (Calculator$Operation$SquareRoot_instance === null) {
      new Calculator$Operation$SquareRoot();
    }
    return Calculator$Operation$SquareRoot_instance;
  }
  Calculator$Operation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Operation',
    interfaces: []
  };
  Calculator.prototype.evalCurrentOperation_0 = function (secondVal, op) {
    var tmp$;
    if (Kotlin.isType(op, Calculator$Operation$Add))
      tmp$ = (op.firstVal + secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$Subtract))
      tmp$ = (op.firstVal - secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$Multiply))
      tmp$ = (op.firstVal * secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$Divide))
      tmp$ = (op.firstVal / secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$Exponent)) {
      var $receiver = op.firstVal;
      tmp$ = Math_0.pow($receiver, secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$Sin)) {
      tmp$ = Math_0.sin(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$Cos)) {
      tmp$ = Math_0.cos(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$Tan)) {
      tmp$ = Math_0.tan(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$ASin)) {
      tmp$ = Math_0.asin(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$ACos)) {
      tmp$ = Math_0.acos(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$ATan)) {
      tmp$ = Math_0.atan(secondVal).toString();
    }
     else if (Kotlin.isType(op, Calculator$Operation$Reciprocal))
      tmp$ = (1.0 / secondVal).toString();
    else if (Kotlin.isType(op, Calculator$Operation$SquareRoot)) {
      tmp$ = Math_0.sqrt(secondVal).toString();
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    this.displayVal_0 = tmp$;
  };
  Calculator.prototype.setCurrentOperation_jv5b45$ = function (op) {
    this.currentOperation_0 = op;
  };
  Calculator.prototype.clearCurrentOperation_0 = function () {
    this.currentOperation_0 = new Calculator$Operation$Add(0.0);
  };
  Calculator.prototype.eval = function () {
    this.evalCurrentOperation_0(toDouble(this.displayVal_0), this.currentOperation_0);
    this.clearCurrentOperation_0();
  };
  Calculator.prototype.enterNextNumber_za3lpa$ = function (nextNumber) {
    var tmp$;
    if (equals(this.displayVal_0, '0') || toDoubleOrNull(this.displayVal_0) == null) {
      tmp$ = nextNumber.toString();
    }
     else if (equals(this.displayVal_0, '-0')) {
      tmp$ = '-' + nextNumber;
    }
     else {
      tmp$ = this.displayVal_0 + nextNumber;
    }
    this.displayVal_0 = tmp$;
  };
  Calculator.prototype.enterDecimal = function () {
    if (!contains(this.displayVal_0, '.')) {
      this.displayVal_0 = this.displayVal_0 + '.';
    }
  };
  Calculator.prototype.negate = function () {
    var tmp$;
    if (startsWith(this.displayVal_0, '-')) {
      tmp$ = this.displayVal_0.substring(1);
    }
     else {
      tmp$ = '-' + this.displayVal_0;
    }
    this.displayVal_0 = tmp$;
  };
  Calculator.prototype.clearEntry = function () {
    this.displayVal_0 = '0';
  };
  Calculator.prototype.clear = function () {
    this.clearEntry();
    this.clearCurrentOperation_0();
  };
  Calculator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Calculator',
    interfaces: []
  };
  function main$refreshDisplay(closure$calc, closure$display) {
    return function () {
      ensureNotNull(closure$display).innerHTML = '<h1>' + closure$calc.getDisplayVal() + '<\/h1>';
    };
  }
  function main$lambda(closure$calc, closure$refreshDisplay) {
    return function (it) {
      closure$calc.clear();
      closure$refreshDisplay();
      return Unit;
    };
  }
  function main$lambda_0(closure$calc, closure$refreshDisplay) {
    return function (it) {
      closure$calc.clearEntry();
      closure$refreshDisplay();
      return Unit;
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
  function main$lambda_1(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(0, ensureNotNull(document.getElementById('Ibutton')));
      return Unit;
    };
  }
  function main$lambda_2(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(1, ensureNotNull(document.getElementById('IIbutton')));
      return Unit;
    };
  }
  function main$lambda_3(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(2, ensureNotNull(document.getElementById('IIIbutton')));
      return Unit;
    };
  }
  function main$lambda_4(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(3, ensureNotNull(document.getElementById('IVbutton')));
      return Unit;
    };
  }
  function main$lambda_5(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(4, ensureNotNull(document.getElementById('Vbutton')));
      return Unit;
    };
  }
  function main$lambda_6(closure$pressMemoryButton) {
    return function (it) {
      closure$pressMemoryButton(5, ensureNotNull(document.getElementById('VIbutton')));
      return Unit;
    };
  }
  function main$lambda_7(closure$pressMemoryButton) {
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
  function main$lambda_8(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(0);
      return Unit;
    };
  }
  function main$lambda_9(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(1);
      return Unit;
    };
  }
  function main$lambda_10(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(2);
      return Unit;
    };
  }
  function main$lambda_11(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(3);
      return Unit;
    };
  }
  function main$lambda_12(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(4);
      return Unit;
    };
  }
  function main$lambda_13(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(5);
      return Unit;
    };
  }
  function main$lambda_14(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(6);
      return Unit;
    };
  }
  function main$lambda_15(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(7);
      return Unit;
    };
  }
  function main$lambda_16(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(8);
      return Unit;
    };
  }
  function main$lambda_17(closure$pressNumberButton) {
    return function (it) {
      closure$pressNumberButton(9);
      return Unit;
    };
  }
  function main$setTwoNumberOperation(closure$calc, closure$refreshDisplay) {
    return function (op) {
      closure$calc.setCurrentOperation_jv5b45$(op);
      closure$calc.clearEntry();
      closure$refreshDisplay();
    };
  }
  function main$runOneNumberOperation(closure$calc, closure$refreshDisplay) {
    return function (op) {
      closure$calc.setCurrentOperation_jv5b45$(op);
      closure$calc.eval();
      closure$refreshDisplay();
    };
  }
  function main$lambda_18(closure$calc, closure$setTwoNumberOperation) {
    return function (it) {
      closure$setTwoNumberOperation(new Calculator$Operation$Add(toDouble(closure$calc.getDisplayVal())));
      return Unit;
    };
  }
  function main$lambda_19(closure$calc, closure$setTwoNumberOperation) {
    return function (it) {
      closure$setTwoNumberOperation(new Calculator$Operation$Subtract(toDouble(closure$calc.getDisplayVal())));
      return Unit;
    };
  }
  function main$lambda_20(closure$calc, closure$setTwoNumberOperation) {
    return function (it) {
      closure$setTwoNumberOperation(new Calculator$Operation$Multiply(toDouble(closure$calc.getDisplayVal())));
      return Unit;
    };
  }
  function main$lambda_21(closure$calc, closure$setTwoNumberOperation) {
    return function (it) {
      closure$setTwoNumberOperation(new Calculator$Operation$Divide(toDouble(closure$calc.getDisplayVal())));
      return Unit;
    };
  }
  function main$lambda_22(closure$calc, closure$refreshDisplay) {
    return function (it) {
      closure$calc.eval();
      closure$refreshDisplay();
      return Unit;
    };
  }
  function main$lambda_23(closure$runOneNumberOperation) {
    return function (it) {
      closure$runOneNumberOperation(Calculator$Operation$Sin_getInstance());
      return Unit;
    };
  }
  function main$lambda_24(closure$runOneNumberOperation) {
    return function (it) {
      closure$runOneNumberOperation(Calculator$Operation$Cos_getInstance());
      return Unit;
    };
  }
  function main$lambda_25(closure$runOneNumberOperation) {
    return function (it) {
      closure$runOneNumberOperation(Calculator$Operation$Tan_getInstance());
      return Unit;
    };
  }
  function main$lambda_26(closure$runOneNumberOperation) {
    return function (it) {
      closure$runOneNumberOperation(Calculator$Operation$ASin_getInstance());
      return Unit;
    };
  }
  function main$lambda_27(closure$runOneNumberOperation) {
    return function (it) {
      closure$runOneNumberOperation(Calculator$Operation$ACos_getInstance());
      return Unit;
    };
  }
  function main$lambda_28(closure$runOneNumberOperation) {
    return function (it) {
      closure$runOneNumberOperation(Calculator$Operation$ATan_getInstance());
      return Unit;
    };
  }
  function main$lambda_29(closure$runOneNumberOperation) {
    return function (it) {
      closure$runOneNumberOperation(Calculator$Operation$Reciprocal_getInstance());
      return Unit;
    };
  }
  function main$lambda_30(closure$calc, closure$setTwoNumberOperation) {
    return function (it) {
      closure$setTwoNumberOperation(new Calculator$Operation$Exponent(toDouble(closure$calc.getDisplayVal())));
      return Unit;
    };
  }
  function main$lambda_31(closure$runOneNumberOperation) {
    return function (it) {
      closure$runOneNumberOperation(Calculator$Operation$SquareRoot_getInstance());
      return Unit;
    };
  }
  function main$lambda_32(closure$calc, closure$refreshDisplay) {
    return function (it) {
      closure$calc.negate();
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
    var refreshDisplay = main$refreshDisplay(calc, display);
    ensureNotNull(document.getElementById('Cbutton')).addEventListener('click', main$lambda(calc, refreshDisplay));
    ensureNotNull(document.getElementById('CEbutton')).addEventListener('click', main$lambda_0(calc, refreshDisplay));
    var pressMemoryButton = main$pressMemoryButton(calc, refreshDisplay);
    ensureNotNull(document.getElementById('Ibutton')).addEventListener('click', main$lambda_1(pressMemoryButton));
    ensureNotNull(document.getElementById('IIbutton')).addEventListener('click', main$lambda_2(pressMemoryButton));
    ensureNotNull(document.getElementById('IIIbutton')).addEventListener('click', main$lambda_3(pressMemoryButton));
    ensureNotNull(document.getElementById('IVbutton')).addEventListener('click', main$lambda_4(pressMemoryButton));
    ensureNotNull(document.getElementById('Vbutton')).addEventListener('click', main$lambda_5(pressMemoryButton));
    ensureNotNull(document.getElementById('VIbutton')).addEventListener('click', main$lambda_6(pressMemoryButton));
    ensureNotNull(document.getElementById('VIIbutton')).addEventListener('click', main$lambda_7(pressMemoryButton));
    var pressNumberButton = main$pressNumberButton(calc, refreshDisplay);
    ensureNotNull(document.getElementById('0button')).addEventListener('click', main$lambda_8(pressNumberButton));
    ensureNotNull(document.getElementById('1button')).addEventListener('click', main$lambda_9(pressNumberButton));
    ensureNotNull(document.getElementById('2button')).addEventListener('click', main$lambda_10(pressNumberButton));
    ensureNotNull(document.getElementById('3button')).addEventListener('click', main$lambda_11(pressNumberButton));
    ensureNotNull(document.getElementById('4button')).addEventListener('click', main$lambda_12(pressNumberButton));
    ensureNotNull(document.getElementById('5button')).addEventListener('click', main$lambda_13(pressNumberButton));
    ensureNotNull(document.getElementById('6button')).addEventListener('click', main$lambda_14(pressNumberButton));
    ensureNotNull(document.getElementById('7button')).addEventListener('click', main$lambda_15(pressNumberButton));
    ensureNotNull(document.getElementById('8button')).addEventListener('click', main$lambda_16(pressNumberButton));
    ensureNotNull(document.getElementById('9button')).addEventListener('click', main$lambda_17(pressNumberButton));
    var setTwoNumberOperation = main$setTwoNumberOperation(calc, refreshDisplay);
    var runOneNumberOperation = main$runOneNumberOperation(calc, refreshDisplay);
    ensureNotNull(document.getElementById('+button')).addEventListener('click', main$lambda_18(calc, setTwoNumberOperation));
    ensureNotNull(document.getElementById('-button')).addEventListener('click', main$lambda_19(calc, setTwoNumberOperation));
    ensureNotNull(document.getElementById('xbutton')).addEventListener('click', main$lambda_20(calc, setTwoNumberOperation));
    ensureNotNull(document.getElementById('/button')).addEventListener('click', main$lambda_21(calc, setTwoNumberOperation));
    ensureNotNull(document.getElementById('=button')).addEventListener('click', main$lambda_22(calc, refreshDisplay));
    ensureNotNull(document.getElementById('sinbutton')).addEventListener('click', main$lambda_23(runOneNumberOperation));
    ensureNotNull(document.getElementById('cosbutton')).addEventListener('click', main$lambda_24(runOneNumberOperation));
    ensureNotNull(document.getElementById('tanbutton')).addEventListener('click', main$lambda_25(runOneNumberOperation));
    ensureNotNull(document.getElementById('asinbutton')).addEventListener('click', main$lambda_26(runOneNumberOperation));
    ensureNotNull(document.getElementById('acosbutton')).addEventListener('click', main$lambda_27(runOneNumberOperation));
    ensureNotNull(document.getElementById('atanbutton')).addEventListener('click', main$lambda_28(runOneNumberOperation));
    ensureNotNull(document.getElementById('recipbutton')).addEventListener('click', main$lambda_29(runOneNumberOperation));
    ensureNotNull(document.getElementById('sqbutton')).addEventListener('click', main$lambda_30(calc, setTwoNumberOperation));
    ensureNotNull(document.getElementById('sqrtbutton')).addEventListener('click', main$lambda_31(runOneNumberOperation));
    ensureNotNull(document.getElementById('pnbutton')).addEventListener('click', main$lambda_32(calc, refreshDisplay));
    ensureNotNull(document.getElementById('.button')).addEventListener('click', main$lambda_33(calc, refreshDisplay));
  }
  Calculator$Operation.Add = Calculator$Operation$Add;
  Calculator$Operation.Subtract = Calculator$Operation$Subtract;
  Calculator$Operation.Multiply = Calculator$Operation$Multiply;
  Calculator$Operation.Divide = Calculator$Operation$Divide;
  Calculator$Operation.Exponent = Calculator$Operation$Exponent;
  Object.defineProperty(Calculator$Operation, 'Sin', {
    get: Calculator$Operation$Sin_getInstance
  });
  Object.defineProperty(Calculator$Operation, 'Cos', {
    get: Calculator$Operation$Cos_getInstance
  });
  Object.defineProperty(Calculator$Operation, 'Tan', {
    get: Calculator$Operation$Tan_getInstance
  });
  Object.defineProperty(Calculator$Operation, 'ASin', {
    get: Calculator$Operation$ASin_getInstance
  });
  Object.defineProperty(Calculator$Operation, 'ACos', {
    get: Calculator$Operation$ACos_getInstance
  });
  Object.defineProperty(Calculator$Operation, 'ATan', {
    get: Calculator$Operation$ATan_getInstance
  });
  Object.defineProperty(Calculator$Operation, 'Reciprocal', {
    get: Calculator$Operation$Reciprocal_getInstance
  });
  Object.defineProperty(Calculator$Operation, 'SquareRoot', {
    get: Calculator$Operation$SquareRoot_getInstance
  });
  Calculator.Operation = Calculator$Operation;
  _.Calculator = Calculator;
  _.main = main;
  main();
  Kotlin.defineModule('Kotculator', _);
  return _;
}(typeof Kotculator === 'undefined' ? {} : Kotculator, kotlin);
