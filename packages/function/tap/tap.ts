import curry from "../curry/curry"



/**
 * Invokes a function on a given value and returns that value.
 *
 * @since 1.0.0
 *
 * @param interceptor - is a function to which the intercepted value will be provided, any value returned will be thrown away
 * @param value - is a value to be intercepted
 * @returns an intercepted value
 *
 * @example
 * ```
 * import { tap } from "@commonly/function"
 *
 * Promise.resolve(3)
 *     .then(tap(alert))    // -> value `x` will be shown in the alert box, it will equal to 3
 *     .then(x => x * x)    // -> x is still equal to 3, chain is preserved
 *     .then(tap(alert))    // -> value `x` will be shown again, this time it will equal to 9
 * ```
 */
const tap = <TValue>(interceptor: (value: TValue) => void, value: TValue): TValue => {
    interceptor(value)
    return value
}



export default curry(tap) as {
    <TValue>(tapper: (value: TValue) => void, value: TValue): TValue
    <TValue>(tapper: (value: TValue) => void): (value: TValue) => TValue
}
