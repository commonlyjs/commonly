import xfind from "../../transducer/xfind/xfind"
import Predicate from "../../type/Predicate/Predicate"
import seq from "../seq/seq"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 *  
 * @param predicate
 * @param iterable
 */
const find = <TValue>(predicate: Predicate<TValue>, iterable: Iterable<TValue>): TValue => {
    return seq(xfind(predicate), iterable)
}



export default find
