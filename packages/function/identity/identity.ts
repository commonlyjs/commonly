/**
 * In mathematics, an identity function, also called an identity relation or identity map or identity transformation,
 * is a function that always returns the same value that was used as its argument.
 * That is, for f being identity the equality f(x) = x holds for all x.
 *
 * @since 1.0.0
 *
 * @param value - is any given value
 * @returns a passed in value
 *
 * @example
 * ```
 * import { identity } from "@commonly/function"
 *
 * identity(2)     // -> 2
 * identity(3)     // -> 3
 * identity(5)     // -> 5
 * ```
 */
const identity = <TValue>(value: TValue): TValue => {
    return value
}



export default identity
