import Transducer from "../../type/Transducer/Transducer"
import empty from "../../function/empty/empty"
import into from "../into/into"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 * 
 * @param xf
 * @param iterable
 * @returns
 */
const seq = <TAccumulator, TValue>(xf: Transducer<TAccumulator, TValue>, iterable: Iterable<TValue>): TAccumulator => {
    return into(empty<TAccumulator>(iterable), xf, iterable)
}



export default seq
