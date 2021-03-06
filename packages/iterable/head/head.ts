import Iterable from "../../type/Iterable/Iterable"
import curry from "../../function/curry/curry"
import reducing from "../../function/reducing/reducing"
import xhead from "../../transducer/xhead/xhead"
import transduce from "../transduce/transduce"



/**
 * Returns a first element of `iterable`.
 *
 * @since 1.0.0
 *
 * @param iterable - is an iterable to be iterated over
 * @returns a first element of an iterable
 *
 * @example
 * ```
 * import { head } from "@commonly/iterable"
 *
 * head([ 0, 1, 1, 2, 3, 5, 8 ])     // -> 0
 * ```
 */
const head = <TValue>(iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xhead(), iterable, reducing.scalar as any)
}



export default curry(head) as unknown as {
    <TValue>(iterable: TValue[]): TValue
    <TValue>(iterable: string): TValue
    <TValue>(iterable: Set<TValue>): TValue
    <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): TValue
    <TIterable extends Iterable<unknown>>(iterable: TIterable): Iterable.ExtractValue<TIterable>
}
