/**
 * Check if a given value is
 * an {@link https://developer.mozilla.org/en-US/docs/Glossary/array | array}.
 *
 * @since 1.0.0
 *
 * @param value - is a value to check
 * @returns either true or false whether the value is an array or not
 *
 * @example
 * ```
 * import { isArray } from "@commonly/reflect"
 *
 * isArray([])     //-> true
 * isArray({})      //-> false
 * ```
 */
const isArray = <TValue>(value: unknown | TValue[]): value is TValue[] => {
    return Array.isArray(value)
}



export default isArray
