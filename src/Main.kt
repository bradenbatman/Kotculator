import org.w3c.dom.Element
import kotlin.browser.document

fun main() {
    val calc = Calculator()
    val display = document.getElementById("display")
    var operation: Calculator.Operation = Calculator.Operation.Add(0.0)

    fun clearOperation(){
        operation = Calculator.Operation.Add(0.0)
    }

    fun clear(){
        clearOperation()
        calc.clearEntry()
    }

    fun refreshDisplay(){
        display!!.innerHTML = "<h1>"+ calc.getWorkingNum() +"</h1>"
    }

    //Memory buttons
    fun pressMemoryButton(spot:Int, button: Element){
        if(calc.isMemorySpotFull(spot)){
            calc.clearMemorySpot(spot)
            button.className = (button.className).replace("btn-success","btn-danger",true)
        }
        else {
            calc.setMemorySpot(spot)
            button.className = (button.className).replace("btn-danger","btn-success",true)
        }
        refreshDisplay()
    }

        (document.getElementById("Ibutton")!!).addEventListener("click", {
            pressMemoryButton(0, (document.getElementById("Ibutton")!!))
        })
        (document.getElementById("IIbutton")!!).addEventListener("click", {
            pressMemoryButton(1, (document.getElementById("IIbutton")!!))
        })
        (document.getElementById("IIIbutton")!!).addEventListener("click", {
            pressMemoryButton(2, (document.getElementById("IIIbutton")!!))
        })
        (document.getElementById("IVbutton")!!).addEventListener("click", {
            pressMemoryButton(3, (document.getElementById("IVbutton")!!))
        })
        (document.getElementById("Vbutton")!!).addEventListener("click", {
            pressMemoryButton(4, (document.getElementById("Vbutton")!!))
        })
        (document.getElementById("VIbutton")!!).addEventListener("click", {
            pressMemoryButton(5, (document.getElementById("VIbutton")!!))
        })
        (document.getElementById("VIIbutton")!!).addEventListener("click", {
            pressMemoryButton(6, (document.getElementById("VIIbutton")!!))
        })


    //Number Buttons
    fun pressNumberButton(nextNumber:Int){
        calc.enterNextNumber(nextNumber)
        refreshDisplay()
    }

    (document.getElementById("1button")!!).addEventListener("click", {
        pressNumberButton(1)
    })
    (document.getElementById("2button")!!).addEventListener("click", {
        pressNumberButton(2)
    })
    (document.getElementById("3button")!!).addEventListener("click", {
        pressNumberButton(3)
    })
    (document.getElementById("4button")!!).addEventListener("click", {
        pressNumberButton(4)
    })
    (document.getElementById("5button")!!).addEventListener("click", {
        pressNumberButton(5)
    })
    (document.getElementById("6button")!!).addEventListener("click", {
        pressNumberButton(6)
    })
    (document.getElementById("7button")!!).addEventListener("click", {
        pressNumberButton(7)
    })
    (document.getElementById("8button")!!).addEventListener("click", {
        pressNumberButton(8)
    })
    (document.getElementById("9button")!!).addEventListener("click", {
        pressNumberButton(9)
    })
    (document.getElementById("0button")!!).addEventListener("click", {
        pressNumberButton(0)
    })

    //Clear Button
    (document.getElementById("Cbutton")!!).addEventListener("click", {
        clear()
        refreshDisplay()
    })

    (document.getElementById("CEbutton")!!).addEventListener("click", {
        calc.clearEntry()
        refreshDisplay()
    })

    //basic functions
    fun doubleNumOperationButton(op: Calculator.Operation){
        operation = op
        calc.clearEntry()
        refreshDisplay()
    }

    fun singleNumOperationButton(op: Calculator.Operation){
        operation = op
        calc.eval(calc.getWorkingNum().toDouble(), operation)
        clearOperation()
        refreshDisplay()
    }

    (document.getElementById("+button")!!).addEventListener("click", {
        doubleNumOperationButton(Calculator.Operation.Add(calc.getWorkingNum().toDouble()))
    })
    (document.getElementById("-button")!!).addEventListener("click", {
        doubleNumOperationButton(Calculator.Operation.Subtract(calc.getWorkingNum().toDouble()))
    })
    (document.getElementById("xbutton")!!).addEventListener("click", {
        doubleNumOperationButton(Calculator.Operation.Multiply(calc.getWorkingNum().toDouble()))
    })
    (document.getElementById("/button")!!).addEventListener("click", {
        doubleNumOperationButton(Calculator.Operation.Divide(calc.getWorkingNum().toDouble()))
    })
    (document.getElementById("=button")!!).addEventListener("click", {
        calc.eval(calc.getWorkingNum().toDouble(), operation)
        clearOperation()
        refreshDisplay()
    })

    //other functions
    (document.getElementById("sinbutton")!!).addEventListener("click", {
        singleNumOperationButton(Calculator.Operation.Sin())
    })
    (document.getElementById("cosbutton")!!).addEventListener("click", {
        singleNumOperationButton(Calculator.Operation.Cos())
    })
    (document.getElementById("tanbutton")!!).addEventListener("click", {
        singleNumOperationButton(Calculator.Operation.Tan())
    })
    (document.getElementById("asinbutton")!!).addEventListener("click", {
        singleNumOperationButton(Calculator.Operation.ASin())
    })
    (document.getElementById("acosbutton")!!).addEventListener("click", {
        singleNumOperationButton(Calculator.Operation.ACos())
    })
    (document.getElementById("atanbutton")!!).addEventListener("click", {
        singleNumOperationButton(Calculator.Operation.ATan())
    })
    (document.getElementById("recipbutton")!!).addEventListener("click", {
        singleNumOperationButton(Calculator.Operation.Reciprocal())
    })
    (document.getElementById("sqbutton")!!).addEventListener("click", {
        doubleNumOperationButton(Calculator.Operation.Exponent(calc.getWorkingNum().toDouble()))
    })
    (document.getElementById("sqrtbutton")!!).addEventListener("click", {
        singleNumOperationButton(Calculator.Operation.SquareRoot())
    })

    //Positive/negative (flip sign) button
    (document.getElementById("pnbutton")!!).addEventListener("click", {
        calc.flipSign()
        refreshDisplay()
    })

    //Decimal button
    (document.getElementById(".button")!!).addEventListener("click", {
        calc.enterDecimal()
        refreshDisplay()
    })

}
