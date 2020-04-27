import Iterable from "../../type/Iterable/Iterable"
import xflatten from "../../transducer/xflatten/xflatten"
import Transducible from "../../type/Transducible/Transducible"
import transduce from "../transduce/transduce"



/**
 * Returns a flattened iterable.
 *
 * @since 1.0.0
 *
 * @param sequence - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { flatten } from "@commonly/iterable"
 *
 * flatten([ 0, [ 1 ], [ 1, 2 ], [ 3 , 5, 8 ] ])     // -> [ 0, 1, 1, 2, 3, 5, 8 ]
 * ```
 */
const flatten = <TAccumulator, TValue>(sequence: Transducible<TValue>): Transducible<TValue> => {
    sequence = Transducible.from(sequence)
    return transduce(xflatten(), sequence[Transducible.reducingSequence].apply(sequence), sequence)
}



export default flatten as {
    <TValue>(iterable: TValue[]): TValue[]
    (iterable: string): string
    <TValue>(iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
}
