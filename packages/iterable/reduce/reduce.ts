import curry from "../../function/curry/curry"
import identity from "../../function/identity/identity"
import isReduced from "../../reflect/isReduced/isReduced"
import Reducer from "../../type/Reducer/Reducer"
import delegate from "../../function/delegate/delegate"
import transduce from "../transduce/transduce"



/**
 * Perform a reduction on a given iterable by applying a given {@link @commonly/type:Reducer | reducing function} to each yield value
 *  from an iterable.
 *
 * @remark Often reduce function happens to be called a {@link https://en.wikipedia.org/wiki/Fold_(higher-order_function) | fold function}.
 *
 * @since 1.0.0
 *
 * @param reducer - is a reducing function
 * @param accumulator - is an initial value for an accumulator
 * @param iterable - is an iterable to be reduced
 * @returns an accumulated value
 *
 * @example
 * ```
 * import { reduce } from "@commonly/iterable"
 *
 * reduce((accumulator, value) => accumulator + value, 0, [0, 1, 1, 2, 3])      // -> 7
 * ```
 */
const reduce = <TAccumulator, TValueA, TValueB = TValueA>(
    reducer: Reducer<TAccumulator, TValueA>,
    accumulator: TAccumulator,
    iterable: Iterable<TValueA>
): TAccumulator => {
    return transduce(identity, iterable, reducer, accumulator)
}


export default reduce as unknown as {
    <TAccumulator, TValueA, TValueB = TValueA>(reducer: Reducer<TAccumulator, TValueA>, accumulator: TAccumulator, xs: Iterable<TValueA>): TAccumulator
    <TAccumulator, TValueA, TValueB = TValueA>(reducer: Reducer<TAccumulator, TValueA>, accumulator: TAccumulator): (xs: Iterable<TValueA>) => TAccumulator
    <TAccumulator, TValueA, TValueB = TValueA>(reducer: Reducer<TAccumulator, TValueA>): (accumulator: TAccumulator, xs: Iterable<TValueA>) => TAccumulator
    <TAccumulator, TValueA, TValueB = TValueA>(reducer: Reducer<TAccumulator, TValueA>): (accumulator: TAccumulator) => (xs: Iterable<TValueA>) => TAccumulator
}
