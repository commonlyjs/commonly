import Iterable from "../../type/Iterable/Iterable"
import curry from "../../function/curry/curry"
import xdistinct from "../../transducer/xdistinct/xdistinct"
import transduce from "../transduce/transduce"



/**
 * Returns a duplicated iterable of the same type as the one given.
 *
 * @since 1.0.0
 *
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { distinct } from "@commonly/iterable"
 *
 * distinct([ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 0, 1, 2, 3, 5, 8 ]
 * ```
 */
const distinct = <TAccumulator, TValueA, TValueB>(iterable: Iterable<TValueA>): Iterable<TValueB> => {
    return transduce(xdistinct(), iterable)
}



export default curry(distinct) as unknown as {
    <TValue>(iterable: TValue[]): TValue[]
    <TValue>(iterable: string): string
    <TValue>(iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
}
