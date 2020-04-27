import Iterable from "../../type/Iterable/Iterable"
import Predicate from "../../type/Predicate/Predicate"
import curry from "../../function/curry/curry"
import reducing from "../../function/reducing/reducing"
import xsome from "../../transducer/xsome/xsome"
import Transducible from "../../type/Transducible/Transducible"
import transduce from '../transduce/transduce'



/**
 * Applies a `predicate` function to each element in the `iterable`,
 *  returning a boolean indicating whether any of the elements passed this predicate.
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
 * @param sequence - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { some } from "@commonly/iterable"
 *
 * some(x => x % 2, [ 0, 1, 1, 2, 3, 5, 8 ])      // -> true
 * ```
 */
const some = <TAccumulator, TValue>(predicate: Predicate<TValue>, sequence: Transducible<TValue>): any => {
    sequence = Transducible.from(sequence)
    return transduce(xsome(predicate), sequence[Transducible.reducingValue].apply(sequence), sequence)
}


// noinspection DuplicatedCode
export default curry(some) as unknown as {
    <TValue>(predicate: Predicate<TValue>, iterable: TValue[]): boolean
    <TValue>(predicate: Predicate<TValue>, iterable: string): boolean
    <TValue>(predicate: Predicate<TValue>, iterable: Set<TValue>): boolean
    <TValue extends unknown[]>(
        predicate: Predicate<TValue>,
        iterable: Map<TValue[0], TValue[1]>
    ): boolean
    <TIterable extends Iterable<unknown>>(
        predicate: Predicate<Iterable.ExtractValue<TIterable>>,
        iterable: TIterable
    ): boolean

    <TValue>(predicate: Predicate<TValue>): {
        (iterable: TValue[]): boolean
        (iterable: string): boolean
        (iterable: Set<TValue>): boolean
        (iterable: Map<unknown, unknown>): boolean
        <TIterable extends Iterable<unknown>>(
            iterable: TIterable
        ): boolean
    }
}
