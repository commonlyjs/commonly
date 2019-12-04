/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Glossary/null | null}.
 *
 * @since 1.0.0
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a null or not
 *
 * @example
 * ```
 *  import { isNull } from "@commonly/reflect"
 *
 *  isNull(null)        //-> true
 *  isNull(undefined)   //-> false
 * ```
 */
const isNull = (value: unknown | null): value is null => {
    return value === null
}



export default isNull
