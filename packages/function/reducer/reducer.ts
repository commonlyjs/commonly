import isArray from "../../reflect/isArray/isArray"
import isNumber from "../../reflect/isNumber/isNumber"
import isString from "../../reflect/isString/isString"
import Reducer from "../../type/Reducer/Reducer"
import identity from "../identity/identity"



/**
 * Provides a reducing function based on passed in accumulator, if nothing suitable is found, then it returns an identity function.
 * 
 * @since 1.0.0
 * 
 * @param accumulator
 * @returns a reducer
 */
const reducer = <TAccumulator, TValue>(accumulator: TAccumulator): Reducer<TAccumulator, TValue> => {
    switch (true) {
        case isArray(accumulator):
            return (accumulator, value) => {
                // @ts-ignore
                accumulator.push(value)
                return accumulator
            }
        case isString(accumulator):
        case isNumber(accumulator):
            return (accumulator, value) => {
                // @ts-ignore
                return accumulator + value
            }
        default:
            return identity
    }
}



export default reducer
