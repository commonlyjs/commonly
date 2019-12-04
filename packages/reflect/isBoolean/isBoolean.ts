/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Glossary/boolean | boolean}.
 *
 * @remarks
 *  Both can classify as a boolean, the primitive value and a primitive wrapper object.
 *
 * @since 1.0.0
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a boolean or not
 *
 * @example
 * ```
 *  import { isBoolean } from "@commonly/reflect"
 *
 *  isBoolean(true)     //-> true
 *  isBoolean(false)    //-> true
 *  isBoolean(NaN)      //-> false
 * ```
 */
const isBoolean = (value: unknown | boolean): value is boolean => {
    return typeof value === "boolean" || value instanceof Boolean
}



export default isBoolean
