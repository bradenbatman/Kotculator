import kotlin.math.*


class Calculator {
    private var workingNum: String = "0"
    private var memorySpots = arrayOfNulls<String>(7)
    private var memorySpotsFull = BooleanArray(7)

    sealed class Operation{
        class Add(val firstVal: Double) : Operation()
        class Subtract(val firstVal: Double) : Operation()
        class Multiply(val firstVal: Double) : Operation()
        class Divide(val firstVal: Double) : Operation()
        class Exponent(val firstVal: Double) : Operation()
        class Sin(): Operation()
        class Cos(): Operation()
        class Tan(): Operation()
        class ASin(): Operation()
        class ACos(): Operation()
        class ATan(): Operation()
        class Reciprocal(): Operation()
        class SquareRoot(): Operation()
    }

    fun eval(secondVal:Double, op:Operation) = when(op){
        is Operation.Add -> {workingNum = (op.firstVal + secondVal).toString()}
        is Operation.Subtract -> {workingNum = (op.firstVal - secondVal).toString()}
        is Operation.Multiply -> {workingNum = (op.firstVal * secondVal).toString()}
        is Operation.Divide -> {workingNum = (op.firstVal / secondVal).toString()}
        is Operation.Exponent -> {workingNum = (op.firstVal.pow(secondVal)).toString()}
        is Operation.Sin -> {workingNum = (sin(secondVal)).toString()}
        is Operation.Cos -> {workingNum = (cos(secondVal)).toString()}
        is Operation.Tan -> {workingNum = (tan(secondVal)).toString()}
        is Operation.ASin -> {workingNum = (asin(secondVal)).toString()}
        is Operation.ACos -> {workingNum = (acos(secondVal)).toString()}
        is Operation.ATan -> {workingNum = (atan(secondVal)).toString()}
        is Operation.Reciprocal -> {workingNum = (1/secondVal).toString()}
        is Operation.SquareRoot -> {workingNum = (sqrt(secondVal)).toString()}
    }

    fun clearEntry(){
        workingNum = "0"
    }

    fun getWorkingNum():String{
        return workingNum
    }

    fun isMemorySpotFull(spot:Int):Boolean{
        return memorySpotsFull[spot]
    }
    fun setMemorySpot(spot:Int){
        memorySpots[spot] = workingNum
        memorySpotsFull[spot] = true
    }

    fun clearMemorySpot(spot: Int){
        workingNum = memorySpots[spot].toString()
        memorySpotsFull[spot]=false
    }

    fun enterNextNumber(nextNumber:Int){
        //if the value starts with 0 and isn't followed by a period, replace the zero
        if ((workingNum.startsWith("0") && !workingNum.startsWith("0.")) || workingNum.toDouble().isNaN() || workingNum.toDouble().isInfinite()){
            workingNum = nextNumber.toString()
        }
        //else if the value starts with -0 and isn't followed by a period, replace the zero, keeping the sign
        else if (workingNum.startsWith("-0") && !workingNum.startsWith("-0.")){
            workingNum = "-" + nextNumber.toString()
        }
        //add the number to the end (value doesn't start with 0 or -0 without a period)
        else{
            workingNum = workingNum + nextNumber.toString()
        }
    }

    fun enterDecimal(){
        if (!workingNum.contains(".")){
            workingNum = workingNum + "."
        }
    }

    fun flipSign(){
        if(workingNum.startsWith("-")){
            workingNum = workingNum.substring(1)
        }
        else {
            workingNum = "-" + workingNum
        }
    }
}