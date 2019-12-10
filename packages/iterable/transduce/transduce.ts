import Reducer from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"
import reduce from "../reduce/reduce"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 * 
 * @param xf
 * @param reducer
 * @param accumulator
 * @param iterable
 * @returns
 */
const transduce = <TAccumulator, TValue>(
    xf: Transducer<TAccumulator, TValue>, 
    reducer: Reducer<TAccumulator, TValue>, 
    accumulator: TAccumulator, 
    iterable: Iterable<TValue>
): TAccumulator => {
    return reduce(xf(reducer), accumulator, iterable)
}



export default transduce
