import transduce from "../transduce/transduce"
import xpartition from "../../transducer/xpartition/xpartition"
import curry from '../../function/curry/curry'
import Iterable from "../../type/Iterable/Iterable"



/**
 * Returns a partitioned iterable into `n`-tuples.
 *
 * @since 1.0.0
 *
 * @param n - is a number of elements to be put into a tuple
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { partition } from "@commonly/iterable"
 *
 * partition(2, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ [ 0, 1 ], [ 1, 2 ], [ 3, 5 ], [ 8 ] ]
 * ```
 */
const partition = <TAccumulator, TValue>(n: number, iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xpartition(n), iterable)
}



export default curry(partition) as unknown as {
    <TValue>(n: number, iterable: TValue[]): TValue[]
    <TValue>(n: number, iterable: string): string
    <TValue>(n: number, iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(n: number, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(n: number, iterable: TIterable): TIterable
}
