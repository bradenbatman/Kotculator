import org.w3c.dom.Element
import kotlin.browser.document

fun main() {
    val calc = Calculator()
    val display = document.getElementById("display")

    fun refreshDisplay(){
        display!!.innerHTML = "<h1>"+ calc.getDisplayVal() +"</h1>"
    }

    //Clear Button
    (document.getElementById("Cbutton")!!).addEventListener("click", {
        calc.clear()
        refreshDisplay()
    })

    //Clear Entry Button
    (document.getElementById("CEbutton")!!).addEventListener("click", {
        calc.clearEntry()
        refreshDisplay()
    })

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

    (document.getElementById("0button")!!).addEventListener("click", {
        pressNumberButton(0)
    })
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

    //basic functions
    fun setTwoNumberOperation(op: Calculator.Operation){
        calc.setCurrentOperation(op)
        calc.clearEntry()
        refreshDisplay()
    }

    fun runOneNumberOperation(op: Calculator.Operation){
        calc.setCurrentOperation(op)
        calc.eval()
        refreshDisplay()
    }

    (document.getElementById("+button")!!).addEventListener("click", {
        setTwoNumberOperation(Calculator.Operation.Add(calc.getDisplayVal().toDouble()))
    })
    (document.getElementById("-button")!!).addEventListener("click", {
        setTwoNumberOperation(Calculator.Operation.Subtract(calc.getDisplayVal().toDouble()))
    })
    (document.getElementById("xbutton")!!).addEventListener("click", {
        setTwoNumberOperation(Calculator.Operation.Multiply(calc.getDisplayVal().toDouble()))
    })
    (document.getElementById("/button")!!).addEventListener("click", {
        setTwoNumberOperation(Calculator.Operation.Divide(calc.getDisplayVal().toDouble()))
    })
    (document.getElementById("=button")!!).addEventListener("click", {
        calc.eval()
        refreshDisplay()
    })

    //other functions
    (document.getElementById("sinbutton")!!).addEventListener("click", {
        runOneNumberOperation(Calculator.Operation.Sin)
    })
    (document.getElementById("cosbutton")!!).addEventListener("click", {
        runOneNumberOperation(Calculator.Operation.Cos)
    })
    (document.getElementById("tanbutton")!!).addEventListener("click", {
        runOneNumberOperation(Calculator.Operation.Tan)
    })
    (document.getElementById("asinbutton")!!).addEventListener("click", {
        runOneNumberOperation(Calculator.Operation.ASin)
    })
    (document.getElementById("acosbutton")!!).addEventListener("click", {
        runOneNumberOperation(Calculator.Operation.ACos)
    })
    (document.getElementById("atanbutton")!!).addEventListener("click", {
        runOneNumberOperation(Calculator.Operation.ATan)
    })
    (document.getElementById("recipbutton")!!).addEventListener("click", {
        runOneNumberOperation(Calculator.Operation.Reciprocal)
    })
    (document.getElementById("sqbutton")!!).addEventListener("click", {
        setTwoNumberOperation(Calculator.Operation.Exponent(calc.getDisplayVal().toDouble()))
    })
    (document.getElementById("sqrtbutton")!!).addEventListener("click", {
        runOneNumberOperation(Calculator.Operation.SquareRoot)
    })

    //Positive/negative (negate) button
    (document.getElementById("pnbutton")!!).addEventListener("click", {
        calc.negate()
        refreshDisplay()
    })

    //Decimal button
    (document.getElementById(".button")!!).addEventListener("click", {
        calc.enterDecimal()
        refreshDisplay()
    })

}
