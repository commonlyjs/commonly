import Iterable from "../../type/Iterable/Iterable"
import Mapper from "../../type/Mapper/Mapper"
import curry from "../../function/curry/curry"
import xmap from "../../transducer/xmap/xmap"
import transduce from "../transduce/transduce"



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
 * import { map } from "@commonly/iterable"
 *
 * map(x => x * x, [ 0, 1, 1, 2, 3, 5, 8 ])         // -> [ 0, 1, 1, 4, 9, 25, 64 ]
 * ```
 */
const map = <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, iterable: Iterable<TValueA>): Iterable<TValueB> => {
    return transduce(xmap(mapper), iterable)
}



export default curry(map) as unknown as {
    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, iterable: TValueA[]): TValueB[]
    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, iterable: string): string
    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, iterable: Set<TValueA>): Set<TValueB>
    <TValueA extends unknown[], TValueB extends unknown[]>(
        mapper: Mapper<TValueA, TValueB>,
        iterable: Map<TValueA[0], TValueA[1]>
    ): Map<TValueB[0], TValueB[1]>
    <TIterable extends Iterable<unknown>>(
        mapper: Mapper<Iterable.ExtractValue<TIterable>, Iterable.ExtractValue<TIterable>>,
        iterable: TIterable
    ): TIterable

    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>): {
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
