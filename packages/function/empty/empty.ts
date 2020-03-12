import isArray from "../../reflect/isArray/isArray"
import isObject from "../../reflect/isObject/isObject"
import isSet from "../../reflect/isSet/isSet"
import isString from "../../reflect/isString/isString"



/**
 * Creates an empty value of the same type as the one passed in.
 *
 * @since 1.0.0
 *
 * @param value - is an object to be emptied
 * @returns an empty object of that type
 *
 * @example
 * ```
 * import { empty } from "@commonly/function"
 *
 * empty([ 1, 1, 2 ])           // -> []
 * empty("112")                 // -> ""
 * empty({ x: 1, y: 1, z: 2 })  // -> {}
 * ```
 */
const empty = <TValue>(value: TValue | any): TValue => {
    switch (true) {
        case isArray(value):
            return [] as unknown as TValue
        case isString(value):
            return "" as unknown as TValue
        case isSet(value):
            return new Set() as unknown as TValue
        default:
            return new ((value as unknown as object).constructor()) as unknown as TValue
    }
}



export default empty
