import xfilter from "../../transducer/xfilter/xfilter"
import Predicate from "../../type/Predicate/Predicate"
import seq from "../seq/seq"



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
    return seq(xfilter(predicate), iterable)
}



export default filter
