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
const seq = <TAccumulator, TValueA, TValueB = TValueA>(xf: Transducer<TAccumulator, TValueA, TValueB>, iterable: Iterable<TValueA>): TAccumulator => {
    return into(empty<TAccumulator>(iterable), xf, iterable)
}



export default seq
