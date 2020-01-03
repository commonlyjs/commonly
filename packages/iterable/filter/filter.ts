import empty from "../../function/empty/empty"
import reducer from "../../function/reducer/reducer"
import xfilter from "../../transducer/xfilter/xfilter"
import Predicate from "../../type/Predicate/Predicate"
import transduce from '../transduce/transduce'



/**
 * Creates a new iterable of the same type as the one given, with only values passing the given predicate function.
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { filter } from "@commonly/iterable"
 *
 * filter(x => x % 2, [ 0, 1, 1, 2, 3, 5, 8 ])      // -> [ 1, 1, 2, 3, 5 ]
 * ```
 */
const filter = <TAccumulator, TValue>(predicate: Predicate<TValue>, iterable: Iterable<TValue>) => {
    return transduce(xfilter(predicate), reducer(iterable) as any, empty(iterable), iterable)
}



export default filter
