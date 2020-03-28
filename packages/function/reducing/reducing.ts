import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"
import pushing from "./pushing/pushing"



/**
 * Provides a reducing function based on passed in accumulator, if nothing suitable is found, then it returns an identity function.
 * 
 * @since 1.0.0
 * 
 * @param accumulator
 * @returns a reducing
 */
const reducing = <TAccumulator, TValue>(accumulator: unknown): Transduced<Reducer<TAccumulator, TValue>> => {
    switch (true) {
        case Array.isArray(accumulator):
            return pushing as Transduced<Reducer<TAccumulator, TValue>>

        default:
            throw new Error(`[No error message yet]`)
    }
}



export default reducing
