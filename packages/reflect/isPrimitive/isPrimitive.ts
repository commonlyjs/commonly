import isBoolean from "../isBoolean/isBoolean"
import isNil from "../isNil/isNil"
import isNumber from "../isNumber/isNumber"
import isString from "../isString/isString"
import isSymbol from "../isSymbol/isSymbol"
import Primitive from "../../type/Primitive/Primitive"



/**
 * Check if a given value is
 * a {@link @commonly/type:Primitive | Primitive}.
 *
 * @remarks
 *  Both can classify as a primitive, the primitive value and a primitive wrapper object.
 *
 * @since 1.0.0
 *
 * @param value - is a value to check
 * @returns either true or false whether the value is a Primitive or not
 *
 * @example
 * ```
 * import { isPrimitive } from "@commonly/reflect"
 *
 * isPrimitive(undefined)   //-> true
 * isPrimitive(null)        //-> true
 * isPrimitive(NaN)         //-> true
 * isPrimitive([])          //-> false
 * ```
 */
const isPrimitive = (value: unknown | Primitive): value is Primitive => {
    return isNil(value) || isBoolean(value) || isNumber(value) || isString(value) || isSymbol(value)
}



export default isPrimitive
