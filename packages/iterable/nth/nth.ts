import Iterable from "../../type/Iterable/Iterable"
import curry from "../../function/curry/curry"
import reducing from "../../function/reducing/reducing"
import xnth from "../../transducer/xnth/xnth"
import Transducible from "../../type/Transducible/Transducible"
import transduce from "../transduce/transduce"



/**
 * Returns an `i`-nth element of `iterable`.
 *
 * @since 1.0.0
 *
 * @param i - is a position of an element
 * @param sequence - is an iterable to be iterated over
 * @returns an nth element of an iterable
 *
 * @example
 * ```
 * import { nth } from "@commonly/iterable"
 *
 * nth(4, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> 3
 * ```
 */
const nth = <TValue>(i: number, sequence: Transducible<TValue>): any => {
    sequence = Transducible.from(sequence)
    return transduce(xnth(i), sequence[Transducible.reducingValue].apply(sequence), sequence)
}



export default curry(nth) as unknown as {
    <TValue>(i: number, iterable: TValue[]): TValue
    <TValue>(i: number, iterable: string): TValue
    <TValue>(i: number, iterable: Set<TValue>): TValue
    <TValue extends unknown[]>(i: number, iterable: Map<TValue[0], TValue[1]>): TValue
    <TIterable extends Iterable<unknown>>(i: number, iterable: TIterable): Iterable.ExtractValue<TIterable>

    <TValue>(i: number): {
        (iterable: TValue[]): TValue
        (iterable: string): TValue
        (iterable: Set<TValue>): TValue
        (iterable: Map<unknown, unknown>): TValue
        <TIterable extends Iterable<unknown>>(iterable: TIterable): TValue
    }
}
