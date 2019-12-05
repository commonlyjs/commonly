/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Glossary/string | string}.
 *
 * @remarks
 *  Both can classify as a string, the primitive value and a primitive wrapper object.
 *
 * @since 1.0.0
 *
 * @param value - is a value to check
 * @returns either true or false whether the value is a string or not
 *
 * @example
 * ```
 * import { isString } from "@commonly/reflect"
 *
 * isString("string")   //-> true
 * isString(null)       //-> false
 * ```
 */
const isString = (value: unknown | string): value is string => {
    return typeof value === "string" || value instanceof String
}



export default isString
