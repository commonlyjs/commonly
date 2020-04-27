import Iterable from "../../type/Iterable/Iterable"
import curry from "../../function/curry/curry"
import xtake from "../../transducer/xtake/xtake"
import Transducible from "../../type/Transducible/Transducible"
import transduce from "../transduce/transduce"



/**
 * Returns an iterable which contains a slice of only the first `n` elements of given `iterable`.
 *
 * @since 1.0.0
 *
 * @param n - is a number of elements to be taken
 * @param sequence - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { take } from "@commonly/iterable"
 *
 * take(5, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 0, 1, 1, 2, 3 ]
 * ```
 */
const take = <TAccumulator, TValue>(n: number, sequence: Transducible<TValue>): Transducible<TValue> => {
    sequence = Transducible.from(sequence)
    return transduce(xtake(n), sequence[Transducible.reducingSequence].apply(sequence), sequence)
}



export default curry(take) as unknown as {
    <TValue>(n: number, iterable: TValue[]): TValue[]
    (n: number, iterable: string): string
    <TValue>(n: number, iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(n: number, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(n: number, iterable: TIterable): TIterable

    (n: number): {
        <TValue>(iterable: TValue[]): TValue[]
        (iterable: string): string
        <TValue>(iterable: Set<TValue>): Set<TValue>
        <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
        <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
    }
}
