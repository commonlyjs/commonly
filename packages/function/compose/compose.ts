import Function from "../../type/Function/Function"
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



export default compose
