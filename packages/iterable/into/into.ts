import Transducer from "../../type/Transducer/Transducer"
import reducer from "../../function/reducer/reducer"
import transduce from "../transduce/transduce"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 * 
 * @param accumulator
 * @param xf
 * @param iterable
 * @returns
 */
const into = <TAccumulator, TValue>(accumulator: TAccumulator, xf: Transducer<TAccumulator, TValue>, iterable: Iterable<TValue>): TAccumulator => {
    return transduce(xf, reducer(accumulator), accumulator, iterable)
}



export default into
