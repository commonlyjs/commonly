import CurriedBinaryFunction from "./CurriedBinaryFunction"
import CurriedTernaryFunction from "./CurriedTernaryFunction"
import CurriedUnaryFunction from "./CurriedUnaryFunction"



type CurriedQuaternaryFunction<TResult, TA, TB, TC, TD> = {
    (a: undefined, b: TB, c: TC, d: TD): CurriedUnaryFunction<TResult, TA>
    (a: TA, b: undefined, c: TC, d: TD): CurriedUnaryFunction<TResult, TB>
    (a: TA, b: TB, c: undefined, d: TD): CurriedUnaryFunction<TResult, TC>
    (a: TA, b: TB, c: TC, d: undefined): CurriedUnaryFunction<TResult, TD>
    (a: TA, b: TB, c: TC, d: TD): TResult

    (a: undefined, b: TB, c: TC): CurriedBinaryFunction<TResult, TA, TD>
    (a: TA, b: undefined, c: TC): CurriedBinaryFunction<TResult, TB, TD>
    (a: TA, b: TB, c: undefined): CurriedBinaryFunction<TResult, TC, TD>
    (a: TA, b: TB, c: TC): CurriedUnaryFunction<TResult, TD>

    (a: undefined, b: TB): CurriedTernaryFunction<TResult, TA, TC, TD>
    (a: TA, b: undefined): CurriedTernaryFunction<TResult, TB, TC, TD>
    (a: TA, b: TB): CurriedBinaryFunction<TResult, TC, TD>

    (a: undefined): CurriedQuaternaryFunction<TResult, TA, TB, TC, TD>
    (a: TA): CurriedTernaryFunction<TResult, TB, TC, TD>
}



export default CurriedQuaternaryFunction
