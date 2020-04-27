import Transducible from "../../type/Transducible/Transducible"
import transduce from "../transduce/transduce"
import xpartitionBy from "../../transducer/xpartitionBy/xpartitionBy"
import Mapper from "../../type/Mapper/Mapper"
import curry from "../../function/curry/curry"
import Iterable from "../../type/Iterable/Iterable"



/**
 * Returns an iterable partitioned into tuples.
 *
 * @since 1.0.0
 *
 * @param mapper - is a mapper function
 * @param sequence - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { partitionBy } from "@commonly/iterable"
 *
 * partitionBy(number => number > 2, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ [ 0, 1, 1, 2 ], [ 3, 5, 8 ] ]
 * ```
 */

const partitionBy = <TAccumulator, TValue, TBy>(mapper: Mapper<TValue, TBy>, sequence: Transducible<TValue>): Transducible<TValue[]> => {
    sequence = Transducible.from(sequence)
    return transduce(xpartitionBy(mapper), sequence[Transducible.reducingSequence].apply(sequence), sequence)
}



export default curry(partitionBy) as unknown as {
    <TValue, TBy>(mapper: Mapper<TValue, TBy>, iterable: TValue[]): TValue[]
    <TValue, TBy>(mapper: Mapper<TValue, TBy>, iterable: string): string
    <TValue, TBy>(mapper: Mapper<TValue, TBy>, iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[], TBy>(mapper: Mapper<TValue, TBy>, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>, TBy>(mapper: Mapper<Iterable.ExtractValue<TIterable>, TBy>, iterable: TIterable): TIterable

    <TValue, TBy>(mapper: Mapper<TValue, TBy>): {
        (iterable: TValue[]): TValue[]
        (iterable: string): string
        (iterable: Set<TValue>): Set<TValue>
        <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
        <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
    }
}
