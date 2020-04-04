import Iterable from "../../type/Iterable/Iterable"
import Predicate from "../../type/Predicate/Predicate"
import curry from "../../function/curry/curry"
import reducing from "../../function/reducing/reducing"
import xfind from "../../transducer/xfind/xfind"
import transduce from '../transduce/transduce'



/**
 * Applies a `predicate` function to each element in the `iterable`,
 *  returning an element passing this predicate.
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { find } from "@commonly/iterable"
 *
 * find(x => x > 2, [ 0, 1, 1, 2, 3, 5, 8 ])      // -> 3
 * ```
 */
const find = <TAccumulator, TValue>(predicate: Predicate<TValue>, iterable: Iterable<TValue>) => {
    return transduce(xfind(predicate), iterable, reducing.scalar)
}



export default curry(find) as unknown as {
    <TValue>(predicate: Predicate<TValue>, iterable: TValue[]): TValue
    <TValue>(predicate: Predicate<TValue>, iterable: string): string
    <TValue>(predicate: Predicate<TValue>, iterable: Set<TValue>): TValue
    <TValue extends unknown[]>(
        predicate: Predicate<TValue>,
        iterable: Map<TValue[0], TValue[1]>
    ): TValue
    <TIterable extends Iterable<unknown>>(
        predicate: Predicate<Iterable.ExtractValue<TIterable>>,
        iterable: TIterable
    ): Iterable.ExtractValue<TIterable>

    <TValue>(predicate: Predicate<TValue>): {
        (iterable: TValue[]): TValue
        (iterable: string): string
        (iterable: Set<TValue>): TValue
        (iterable: Map<unknown, unknown>): TValue
        <TIterable extends Iterable<unknown>>(
            iterable: TIterable
        ): TValue
    }
}
