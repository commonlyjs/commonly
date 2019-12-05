/**
 * Always returns an undefined no matter the arguments.
 *
 * @since 1.0.0
 *
 * @param _ - is a variadic list of parameters which are unused anyway
 * @returns an undefined
 *
 * @example
 * ```
 * import { noop } from "@commonly/function"
 *
 * noop(1, 1, 2, 3, 5)     // -> undefined
 * ```
 */
const noop = (..._: unknown[]): undefined => {
    return undefined
}



export default noop
