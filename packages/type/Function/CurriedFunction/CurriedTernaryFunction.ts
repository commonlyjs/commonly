import CurriedBinaryFunction from "./CurriedBinaryFunction"
import CurriedUnaryFunction from "./CurriedUnaryFunction"



type CurriedTernaryFunction<TResult, TA, TB, TC> = {
    (a: undefined, b: TB, c: TC): CurriedUnaryFunction<TResult, TA>
    (a: TA, b: undefined, c: TC): CurriedUnaryFunction<TResult, TB>
    (a: TA, b: TB, c: undefined): CurriedUnaryFunction<TResult, TC>
    (a: TA, b: TB, c: TC): TResult

    (a: undefined, b: TB): CurriedBinaryFunction<TResult, TA, TC>
    (a: TA, b: undefined): CurriedBinaryFunction<TResult, TB, TC>
    (a: TA, b: TB): CurriedUnaryFunction<TResult, TC>

    (a: undefined): CurriedTernaryFunction<TResult, TA, TB, TC>
    (a: TA): CurriedBinaryFunction<TResult, TB, TC>
}



export default CurriedTernaryFunction
