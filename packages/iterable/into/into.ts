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
const into = <TAccumulator, TValueA, TValueB = TValueA>(accumulator: TAccumulator, xf: Transducer<TAccumulator, TValueA, TValueB>, iterable: Iterable<TValueA>): TAccumulator => {
    return transduce(xf, reducer(accumulator), accumulator, iterable)
}



export default into
