import Iterable from "../../type/Iterable/Iterable"
import Comparator from "../../type/Comparator/Comparator"
import xsort from "../../transducer/xsort/xsort"
import curry from "../../function/curry/curry"
import transduce from "../transduce/transduce"



/**
 * Returns an iterable of which the order of the elements is dictated by a `comparator` function.
 *
 * @since 1.0.0
 *
 * @param comparator - is a comparator function
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { sort } from "@commonly/iterable"
 *
 * sort((a, b) => b - a, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 8, 5, 3, 2, 1, 1, 0 ]
 * ```
 */
const sort = <TAccumulator, TValue>(comparator: Comparator<TValue>, iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xsort(comparator), iterable)
}



export default curry(sort) as unknown as {
    <TValue>(comparator: Comparator<TValue>, iterable: TValue[]): TValue[]
    <TValue>(comparator: Comparator<string>, iterable: string): string
    <TValue>(comparator: Comparator<TValue>, iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(comparator: Comparator<TValue>, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(comparator: Comparator<Iterable.ExtractValue<TIterable>>, iterable: TIterable): TIterable

    <TValue>(comparator: Comparator<TValue>): {
        (iterable: TValue[]): TValue[]
        (iterable: string): string
        (iterable: Set<TValue>): Set<TValue>
        <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
        <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
    }
}
