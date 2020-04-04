import Iterable from "../../type/Iterable/Iterable"
import Mapper from "../../type/Mapper/Mapper"
import curry from "../../function/curry/curry"
import transduce from "../transduce/transduce"
import xchain from "../../transducer/xchain/xchain"



/**
 * Applies a mapper function to each element in the iterable, producing an iterable of the same type.
 *
 * @since 1.0.0
 *
 * @param mapper - is a mapping function
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { chain } from "@commonly/iterable"
 *
 * chain(x => [ x, x * x ], [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 0, 0, 1, 1, 1, 1, 2, 4, 3, 9, 5, 25, 8, 64 ]
 * ```
 */
const chain = <TAccumulator, TValueA, TValueB>(mapper: Mapper<TValueA, TValueB[]>, iterable: Iterable<TValueA>): Iterable<TValueB> => {
    return transduce(xchain(mapper), iterable)
}



export default curry(chain) as unknown as {
    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB[]>, iterable: TValueA[]): TValueB[]
    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB[]>, iterable: string): string
    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB[]>, iterable: Set<TValueA>): Set<TValueB>
    <TIterable extends Iterable<unknown>>(
        mapper: Mapper<Iterable.ExtractValue<TIterable>, Iterable.ExtractValue<TIterable>[]>,
        iterable: TIterable
    ): TIterable

    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB[]>): {
        (iterable: TValueA[]): TValueB[]
        (iterable: string): string
        (iterable: Set<TValueA>): Set<TValueB>
        (iterable: Map<unknown, unknown>): Map<
            TValueB extends unknown[] ? TValueB[0] : never,
            TValueB extends unknown[] ? TValueB[1] : never
        >
        <TIterable extends Iterable<unknown>>(
            iterable: TIterable
        ): TIterable
    }
}
