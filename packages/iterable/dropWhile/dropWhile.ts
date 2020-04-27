import Transducible from "../../type/Transducible/Transducible"
import transduce from "../transduce/transduce"
import Predicate from "../../type/Predicate/Predicate"
import xdropWhile from "../../transducer/xdropWhile/xdropWhile"
import curry from '../../function/curry/curry'
import Iterable from "../../type/Iterable/Iterable"



/**
 * Creates a new iterable of the same type as the one given, where every value excluding the first n values are taken.
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
 * @param sequence - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { dropWhile } from "@commonly/iterable"
 *
 * dropWhile(value => value <= 3, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 5, 8 ]
 * ```
 */
const dropWhile = <TAccumulator, TValue>(predicate: Predicate<TValue>, sequence: Transducible<TValue>): Transducible<TValue> => {
    sequence = Transducible.from(sequence)
    return transduce(xdropWhile(predicate), sequence[Transducible.reducingSequence].apply(sequence), sequence)
}



export default curry(dropWhile) as unknown as {
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
