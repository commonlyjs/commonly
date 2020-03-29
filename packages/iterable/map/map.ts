import xmap from "../../transducer/xmap/xmap"
import Mapper from "../../type/Mapper/Mapper"
import transduce from "../transduce/transduce"
import delegate from "../../function/delegate/delegate"



/**
 * Creates a new iterable of the same type as the one given, where every value is altered by a result of a given mapper function.
 *
 * @since 1.0.0
 *
 * @param mapper - is a mapping function
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { map } from "@commonly/iterable"
 *
 * map(x => x * x, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 0, 1, 1, 4, 9, 25, 64 ]
 * ```
 */
const map = <TAccumulator, TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, iterable: Iterable<TValueA>): Iterable<TValueB> => {
    return transduce(xmap(mapper), iterable)
}



export default delegate(map, (mapper, iterable) => iterable)
