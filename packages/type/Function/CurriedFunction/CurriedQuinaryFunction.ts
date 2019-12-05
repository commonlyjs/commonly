import CurriedBinaryFunction from "./CurriedBinaryFunction"
import CurriedQuaternaryFunction from "./CurriedQuaternaryFunction"
import CurriedTernaryFunction from "./CurriedTernaryFunction"
import UnaryFunction from "../UnaryFunction/UnaryFunction"



type CurriedQuinaryFunction<TResult, TA, TB, TC, TD, TE> = {
    (a: TA, b: TB, c: TC, d: TD, e: TE): TResult
    (a: TA, b: TB, c: TC, d: TD): UnaryFunction<TResult, TE>
    (a: TA, b: TB, c: TC): CurriedBinaryFunction<TResult, TD, TE>
    (a: TA, b: TB): CurriedTernaryFunction<TResult, TC, TD, TE>
    (a: TA): CurriedQuaternaryFunction<TResult, TB, TC, TD, TE>
}



export default CurriedQuinaryFunction
