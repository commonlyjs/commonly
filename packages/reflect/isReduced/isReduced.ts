import Reduced from "../../type/Reduced/Reduced"
import isObject from "../isObject/isObject"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 * 
 * @param value
 * @returns
 */
const isReduced = <TValue>(value: TValue | Reduced<TValue>): value is Reduced<TValue> => {
    if (isObject(value)) {
        return value.hasOwnProperty("reduced")
    } else {
        return false
    }
}



export default isReduced
