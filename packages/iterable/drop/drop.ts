import Iterable from "../../type/Iterable/Iterable"
import curry from "../../function/curry/curry"
import xdrop from "../../transducer/xdrop/xdrop"
import transduce from "../transduce/transduce"



/**
 * Returns an iterable which contains a slice of all elements of given `iterable` except for the first `n` elements.
 *
 * @since 1.0.0
 *
 * @param n - is a number of elements to be dropped
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { drop } from "@commonly/iterable"
 *
 * drop(5, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 5, 8 ]
 * ```
 */
const drop = <TAccumulator, TValue>(n: number, iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xdrop(n), iterable)
}



export default curry(drop) as unknown as {
    <TValue>(n: number, iterable: TValue[]): TValue[]
    <TValue>(n: number, iterable: string): string
    <TValue>(n: number, iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(n: number, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(n: number, iterable: TIterable): TIterable
}
