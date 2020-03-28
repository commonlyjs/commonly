import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"
import pushing from "./pushing/pushing"
import scalar from "./scalar/scalar"



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
            return pushing as Transduced<Reducer<TAccumulator, TValue>>

        default:
            return scalar as Transduced<Reducer<TAccumulator, TValue>>
    }
}

reducing.pushing = pushing
reducing.scalar = scalar



export default reducing
