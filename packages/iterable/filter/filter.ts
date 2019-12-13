import empty from "../../function/empty/empty"
import reducer from "../../function/reducer/reducer"
import xfilter from "../../transducer/xfilter/xfilter"
import Predicate from "../../type/Predicate/Predicate"
import transduce from '../transduce/transduce'



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate
 * @param iterable
 * @returns
 */
const filter = <TAccumulator, TValue>(predicate: Predicate<TValue>, iterable: Iterable<TValue>) => {
    return transduce(xfilter(predicate), reducer(iterable) as any, empty(iterable), iterable)
}



export default filter
