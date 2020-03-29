import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"
import array from "./array/array"
import scalar from "./scalar/scalar"
import string from "./string/string"



/**
 * Provides a reducing function based on passed accumulator, if nothing suitable is found, then it returns a scalar reducer.
 * 
 * @since 1.0.0
 * 
 * @param accumulator
 * @returns a reducing function
 */
const reducing = <TAccumulator, TValue>(accumulator: unknown): Transduced<Reducer<TAccumulator, TValue>> => {
    switch (true) {
        case Array.isArray(accumulator):
            return array as Transduced<Reducer<TAccumulator, TValue>>

        case typeof accumulator === "string":
            return string as Transduced<Reducer<TAccumulator, TValue>>

        default:
            return scalar as Transduced<Reducer<TAccumulator, TValue>>
    }
}

reducing.pushing = array
reducing.string = string
reducing.scalar = scalar



export default reducing
