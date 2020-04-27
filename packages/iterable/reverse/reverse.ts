import Iterable from "../../type/Iterable/Iterable"
import curry from '../../function/curry/curry'
import xreverse from "../../transducer/xreverse/xreverse"
import Transducible from "../../type/Transducible/Transducible"
import transduce from "../transduce/transduce"



/**
 * Returns an iterable of which the order of the elements is reversed.
 *
 * @since 1.0.0
 *
 * @param sequence - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { reverse } from "@commonly/iterable"
 *
 * reverse([ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 8, 5, 3, 2, 1, 1, 0 ]
 * ```
 */
const reverse = <TAccumulator, TValue>(sequence: Transducible<TValue>): Transducible<TValue> => {
    sequence = Transducible.from(sequence)
    return transduce(xreverse(), sequence[Transducible.reducingSequence].apply(sequence), sequence)
}



export default curry(reverse) as unknown as {
    <TValue>(iterable: TValue[]): TValue
    <TValue>(iterable: string): TValue
    <TValue>(iterable: Set<TValue>): TValue
    <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): TValue
    <TIterable extends Iterable<unknown>>(iterable: TIterable): Iterable.ExtractValue<TIterable>
}
