import Function from "../../type/Function/Function"
import Identity from "../../type/Identity/Identity"
import identity from "../identity/identity"



/**
 * Performs a {@link https://en.wikipedia.org/wiki/Function_composition | function composition} of a given functions.
 *
 * @since 1.0.0
 *
 * @param functions - are functions to be composed
 * @returns a composed function
 *
 * @example
 * ```
 * import { compose } from "@commonly/function"
 *
 * const composed = compose(String, Math.sin)
 * composed(7)      // -> "0.6569865987187891"
 * ```
 */
const compose = <TReturnValue>(...functions: Function.Variadic<any, any>[]): Function.Variadic<TReturnValue, any> => {
    const [ first = identity, ...rest ] = functions
    return rest.reduce((g, f) =>
        (...varargs) => g(f(...varargs)), first)
}



export default compose as {
    <TValue>(): Identity<TValue>

    <TReturnValue, TArguments extends unknown[]>(
        f: Function.Variadic<TReturnValue, TArguments>
    ): Function.Variadic<TReturnValue, TArguments>

    <TReturnValue, TArguments extends unknown[], TIntermediateValue>(
        g: Function.Unary<TReturnValue, TIntermediateValue>,
        f: Function.Variadic<TIntermediateValue, TArguments>
    ): Function.Variadic<TReturnValue, TArguments>

    <TReturnValue, TArguments extends unknown[], TIntermediateValueA, TIntermediateValueB>(
        h: Function.Unary<TReturnValue, TIntermediateValueB>,
        g: Function.Unary<TIntermediateValueB, TIntermediateValueA>,
        f: Function.Variadic<TIntermediateValueA, TArguments>
    ): Function.Variadic<TReturnValue, TArguments>
}
