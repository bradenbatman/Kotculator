import kotlin.math.*

class Calculator {
    private var displayVal: String = "0"
    private var memorySpots = arrayOfNulls<String>(7)
    private var memorySpotsFull = BooleanArray(7)
    private var currentOperation: Operation = Operation.Add(0.0)

    fun getDisplayVal():String{
        return displayVal
    }

    fun isMemorySpotFull(spot:Int):Boolean{
        return memorySpotsFull[spot]
    }

    fun setMemorySpot(spot:Int){
        memorySpots[spot] = displayVal
        memorySpotsFull[spot]=true
    }

    fun clearMemorySpot(spot: Int){
        displayVal = "${memorySpots[spot]}"
        memorySpotsFull[spot]=false
    }

    //Operations that involve more than one value have the first value stored when the object is instantiated.
    sealed class Operation{
        class Add(val firstVal: Double) : Operation()
        class Subtract(val firstVal: Double) : Operation()
        class Multiply(val firstVal: Double) : Operation()
        class Divide(val firstVal: Double) : Operation()
        class Exponent(val firstVal: Double) : Operation()
        object Sin: Operation()
        object Cos: Operation()
        object Tan: Operation()
        object ASin: Operation()
        object ACos: Operation()
        object ATan: Operation()
        object Reciprocal: Operation()
        object SquareRoot: Operation()
    }

    //Operation is evaluated based on which type of operation the value is.
    private fun evalCurrentOperation(secondVal:Double, op:Operation){
        displayVal = when(op) {
            is Operation.Add -> { "${op.firstVal + secondVal}" }
            is Operation.Subtract -> { "${op.firstVal - secondVal}" }
            is Operation.Multiply -> { "${op.firstVal * secondVal}" }
            is Operation.Divide -> { "${op.firstVal / secondVal}" }
            is Operation.Exponent -> { "${op.firstVal.pow(secondVal)}" }
            is Operation.Sin -> { "${sin(secondVal)}" }
            is Operation.Cos -> { "${cos(secondVal)}" }
            is Operation.Tan -> { "${tan(secondVal)}" }
            is Operation.ASin -> { "${asin(secondVal)}" }
            is Operation.ACos -> { "${acos(secondVal)}" }
            is Operation.ATan -> { "${atan(secondVal)}" }
            is Operation.Reciprocal -> { "${1.0 / secondVal}" }
            is Operation.SquareRoot -> { "${sqrt(secondVal)}" }
        }
    }

    fun setCurrentOperation(op: Operation){
        currentOperation = op
    }

    private fun clearCurrentOperation(){
        currentOperation = Operation.Add(0.0)
    }

    fun eval(){
        evalCurrentOperation(displayVal.toDouble(), currentOperation)
        clearCurrentOperation()
    }

    fun enterNextNumber(nextNumber:Int){
        displayVal =
                //displayVal is replaced with the new number if displayVal is 0, NaN, or Infinity
                if (displayVal == "0" || displayVal.toDoubleOrNull()==null){
                    "$nextNumber"
                }
                //displayVal is replaced with the new number and keeps the negative sign if displayVal is -0
                else if (displayVal== "-0"){
                    "-$nextNumber"
                }
                //add the new number to the end of displayVal
                else{
                    "$displayVal$nextNumber"
                }
    }

    //Adds a decimal if there isn't already one.
    fun enterDecimal(){
        if (!displayVal.contains(".")){
            displayVal = "$displayVal."
        }
    }

    //If the string is negative, it becomes positive, if it is positive, it becomes negative
    fun negate(){
        displayVal =
                if(displayVal.startsWith("-")){
                    displayVal.substring(1)
                }
                else {
                    "-$displayVal"
                }
    }

    fun clearEntry(){
        displayVal = "0"
    }

    fun clear(){
        clearEntry()
        clearCurrentOperation()
    }
}