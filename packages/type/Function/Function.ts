import BinaryFunction from "./BinaryFunction/BinaryFunction"
import NullaryFunction from './NullaryFunction/NullaryFunction'
import PartialFunction from "./PartialFunction/PartialFunction"
import QuaternaryFunction from "./QuaternaryFunction/QuaternaryFunction"
import QuinaryFunction from "./QuinaryFunction/QuinaryFunction"
import TernaryFunction from "./TernaryFunction/TernaryFunction"
import UnaryFunction from "./UnaryFunction/UnaryFunction"
import VariadicFunction from "./VariadicFunction/VariadicFunction"


/**
 * The Function type represents the
 *  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function | function's constructor}.
 *
 * @since 1.0.0
 */
type Function = typeof Function

namespace Function {
    export type Nullary<TResult> =
        NullaryFunction<TResult>

    export type Unary<TResult, TA> =
        UnaryFunction<TResult, TA>

    export type Binary<TResult, TA, TB> =
        BinaryFunction<TResult, TA, TB>

    export type Ternary<TResult, TA, TB, TC> =
        TernaryFunction<TResult, TA, TB, TC>

    export type Quaternary<TResult, TA, TB, TC, TD> =
        QuaternaryFunction<TResult, TA, TB, TC, TD>

    export type Quinary<TResult, TA, TB, TC, TD, TE> =
        QuinaryFunction<TResult, TA, TB, TC, TD, TE>

    export type Variadic<TResult, TParameters extends unknown[]> =
        VariadicFunction<TResult, TParameters>

    export type Partial<TResult, TParameters extends unknown[], TApplied extends unknown[]> =
        PartialFunction<TResult, TParameters, TApplied>
}



export default Function
