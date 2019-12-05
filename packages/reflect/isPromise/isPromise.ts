/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise | Promise}.
 *
 * @since 1.0.0
 *
 * @param value - is a value to check
 * @returns either true of false whether the value is a Promise or not
 *
 * @example
 * ```
 * import { isPromise } from "@commonly/reflect"
 *
 * isPromise(new Promise())         //-> true
 * isPromise(Promise.resolve())     //-> true
 * isPromise(NaN)                   //-> false
 * ```
 */
const isPromise = <TValue>(value: unknown | Promise<TValue>): value is Promise<TValue> => {
    return value === Promise.resolve(value)
}



export default isPromise
