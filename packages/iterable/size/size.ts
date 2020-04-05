import Iterable from "../../type/Iterable/Iterable"
import curry from "../../function/curry/curry"
import reducing from "../../function/reducing/reducing"
import xsize from "../../transducer/xsize/xsize"
import transduce from "../transduce/transduce"



/**
 * [Not documented yet]
 *
 * @since 1.0.0
 *
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { take } from "@commonly/iterable"
 *
 * take(5, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 0, 1, 1, 2, 3 ]
 * ```
 */
const size = <TAccumulator, TValue>(iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xsize(), iterable, reducing.scalar as any)
}



export default curry(size) as unknown as {
    <TValue>(iterable: TValue[]): number
    (iterable: string): number
    <TValue>(iterable: Set<TValue>): number
    <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): number
    <TIterable extends Iterable<unknown>>(iterable: TIterable): number
}
