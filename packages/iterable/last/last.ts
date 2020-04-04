import transduce from "../transduce/transduce"
import reducing from "../../function/reducing/reducing"
import xlast from "../../transducer/xlast/xlast"
import curry from '../../function/curry/curry'
import Iterable from "../../type/Iterable/Iterable"



/**
 * Returns a last element of `iterable`.
 *
 * @since 1.0.0
 *
 * @param iterable - is an iterable to be iterated over
 * @returns a last element of an iterable
 *
 * @example
 * ```
 * import { last } from "@commonly/iterable"
 *
 * last([ 0, 1, 1, 2, 3, 5, 8 ])     // -> 8
 * ```
 */
const last = <TValue>(iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xlast(), iterable, reducing.scalar as any)
}


export default curry(last) as unknown as {
    <TValue>(iterable: TValue[]): TValue
    <TValue>(iterable: string): TValue
    <TValue>(iterable: Set<TValue>): TValue
    <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): TValue
    <TIterable extends Iterable<unknown>>(iterable: TIterable): Iterable.ExtractValue<TIterable>
}
