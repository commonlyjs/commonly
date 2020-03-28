import xtake from "../../transducer/xtake/xtake"
import transduce from "../transduce/transduce"



/**
 * Creates a new iterable of the same type as the one given, where only first n values are taken.
 *
 * @since 1.0.0
 *
 * @param n - is a number of elements to be taken
 * @param iterable - is an iterable to be taken from
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { take } from "@commonly/iterable"
 *
 * take(5, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 0, 1, 1, 2, 3 ]
 * ```
 */
const take = <TAccumulator, TValue>(n: number, iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xtake(n), iterable)
}



export default take
