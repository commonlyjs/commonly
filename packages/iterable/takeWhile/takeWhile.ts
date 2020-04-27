import Transducible from "../../type/Transducible/Transducible"
import transduce from "../transduce/transduce"
import Predicate from "../../type/Predicate/Predicate"
import xtakeWhile from "../../transducer/xtakeWhile/xtakeWhile"
import curry from "../../function/curry/curry"
import Iterable from "../../type/Iterable/Iterable"



/**
 * Returns an iterable which contains a slice of only the first `n` elements of given `iterable`.
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
 * @param sequence - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { takeWhile } from "@commonly/iterable"
 *
 * takeWhile(value => value <= 3, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 0, 1, 1, 2, 3 ]
 * ```
 */
const takeWhile = <TAccumulator, TValue>(predicate: Predicate<TValue>, sequence: Transducible<TValue>): Transducible<TValue> => {
    sequence = Transducible.from(sequence)
    return transduce(xtakeWhile(predicate), sequence[Transducible.reducingSequence].apply(sequence), sequence)
}



export default curry(takeWhile) as unknown as {
    <TValue>(predicate: Predicate<TValue>, iterable: TValue[]): TValue[]
    <TValue>(predicate: Predicate<TValue>, iterable: string): string
    <TValue>(predicate: Predicate<TValue>, iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(predicate: Predicate<TValue>, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(predicate: Predicate<Iterable.ExtractValue<TIterable>>, iterable: TIterable): TIterable

    <TValue>(predicate: Predicate<TValue>): {
        (iterable: TValue[]): TValue[]
        (iterable: string): string
        (iterable: Set<TValue>): Set<TValue>
        <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
        <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
    }
}
