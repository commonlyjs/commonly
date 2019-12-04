/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map | Map}.
 *
 * @since 1.0.0
 *
 * @param value - is a value to check
 * @returns a boolean whether the value is a Map or not
 *
 * @example
 * ```
 *  import { isMap } from "@commonly/reflect"
 *
 *  isMap(new Map())     //-> true
 *  isMap(NaN)           //-> false
 * ```
 */
const isMap = <TKey, TValue>(value: unknown | Map<TKey, TValue>): value is Map<TKey, TValue> => {
    return value instanceof Map
}



export default isMap
