import CurriedUnaryFunction from "./CurriedUnaryFunction"
import UnaryFunction from "../UnaryFunction/UnaryFunction"



type CurriedBinaryFunction<TResult, TA, TB> = {
    (a: undefined, b: TB): UnaryFunction<TResult, TA>
    (a: TA, b: undefined): UnaryFunction<TResult, TB>
    (a: TA, b: TB): TResult

    (a: undefined): CurriedBinaryFunction<TResult, TA, TB>
    (a: TA): CurriedUnaryFunction<TResult, TB>
}



export default CurriedBinaryFunction
