import Function from "../../type/Function/Function"
import partial from "../partial/partial"



/**
 * Preforms a {@link https://en.wikipedia.org/wiki/Currying | currying} of an f function.
 *
 * @since 1.0.0
 *
 * @param f - is a function to be curried
 * @returns a curried version of an f function
 *
 * @example
 * ```
 * import { curry } from "@commonly/function"
 *
 * const power = curry(Math.pow)
 * power(2)(3)     // -> 8
 * ```
 */
const curry = <TResult, TParameters extends unknown[]>(
    f: Function.Variadic<TResult, TParameters>
): Function.Curried<TResult, TParameters> => {
    const curried = (...varargs: TParameters) => {
        const partially = partial(f, ...varargs)
        if (partially.length > 0) {
            return curry(partially)
        } else {
            return partially(...varargs)
        }
    }

    Object.defineProperties(curried, {
        name: {
            value: f.name,
            configurable: true,
            enumerable: false,
            writable: false
        },
        length: {
            configurable: true,
            enumerable: false,
            writable: false,
            value: f.length
        },
        toString: {
            value: f.toString.bind(f),
            configurable: true,
            enumerable: false,
            writable: true
        }
    })

    return curried as unknown as Function.Curried<TResult, TParameters>
}



export default curry
