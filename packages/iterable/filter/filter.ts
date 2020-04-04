import Iterable from "../../type/Iterable/Iterable"
import Predicate from "../../type/Predicate/Predicate"
import curry from "../../function/curry/curry"
import xfilter from "../../transducer/xfilter/xfilter"
import transduce from "../transduce/transduce"



/**
 * Applies a `predicate` function to each element in the `iterable`,
 *  producing an iterable of the same type with elements passing this predicate.
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
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
    return transduce(xfilter(predicate), iterable)
}



export default curry(filter) as unknown as {
    <TValue>(predicate: Predicate<TValue>, iterable: TValue[]): TValue[]
    <TValue>(predicate: Predicate<TValue>, iterable: string): string
    <TValue>(predicate: Predicate<TValue>, iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(predicate: Predicate<TValue>, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(predicate: Predicate<Iterable.ExtractValue<TIterable>>, iterable: TIterable): TIterable

    <TValue>(predicate: Predicate<TValue>): {
        (iterable: TValue[]): TValue[]
        (iterable: string): string
        (iterable: Set<TValue>): Set<TValue>
        (iterable: Map<unknown, unknown>): Map<TValue extends unknown[] ? TValue[0] : never, TValue extends unknown[] ? TValue[1] : never>
        <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
    }
}
