import kotlin.math.*

class Calculator {
    private var displayVal: String = "0"
    private var memorySpots = arrayOfNulls<String>(7)
    private var memorySpotsFull = BooleanArray(7)
    private var currentOperation: Operation = Operation.Add(0.0)

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

    private fun evalCurrentOperation(secondVal:Double, op:Operation) = when(op){
        is Operation.Add -> {displayVal = "${op.firstVal + secondVal}"}
        is Operation.Subtract -> {displayVal = "${op.firstVal - secondVal}"}
        is Operation.Multiply -> {displayVal = "${op.firstVal * secondVal}"}
        is Operation.Divide -> {displayVal = "${op.firstVal / secondVal}"}
        is Operation.Exponent -> {displayVal = "${op.firstVal.pow(secondVal)}"}
        is Operation.Sin -> {displayVal = "${sin(secondVal)}"}
        is Operation.Cos -> {displayVal = "${cos(secondVal)}"}
        is Operation.Tan -> {displayVal = "${tan(secondVal)}"}
        is Operation.ASin -> {displayVal = "${asin(secondVal)}"}
        is Operation.ACos -> {displayVal = "${acos(secondVal)}"}
        is Operation.ATan -> {displayVal = "${atan(secondVal)}"}
        is Operation.Reciprocal -> {displayVal = "${1/secondVal}"}
        is Operation.SquareRoot -> {displayVal = "${sqrt(secondVal)}"}
    }

    fun eval(){
        evalCurrentOperation(displayVal.toDouble(), currentOperation)
        clearCurrentOperation()
    }

    fun setCurrentOperation(op: Operation){
        currentOperation = op
    }

    private fun clearCurrentOperation(){
        currentOperation = Operation.Add(0.0)
    }

    fun clearEntry(){
        displayVal = "0"
    }

    fun clear(){
        clearEntry()
        clearCurrentOperation()
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

    fun getDisplayVal():String{
        return displayVal
    }

    fun enterNextNumber(nextNumber:Int){
        displayVal =
                //displayVal is replaced with the new number if displayVal is 0, NaN, or Infinity
                if (displayVal == "0" || displayVal.toDouble().isNaN() || displayVal.toDouble().isInfinite()){
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

    fun enterDecimal(){
        if (!displayVal.contains(".")){
            displayVal = "$displayVal."
        }
    }

    fun negate(){
        displayVal =
                if(displayVal.startsWith("-")){
                    displayVal.substring(1)
                }
                else {
                    "-$displayVal"
                }
    }
}