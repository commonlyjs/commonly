import curry from "../../function/curry/curry"
import isReduced from "../../reflect/isReduced/isReduced"
import Reducer from "../../type/Reducer/Reducer"
import delegate from "../../function/delegate/delegate"



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
const reduce = <TAccumulator, TValueA, TValueB = TValueA>
    (reducer: Reducer<TAccumulator, TValueA>, accumulator: TAccumulator, iterable: Iterable<TValueA>): TAccumulator => {
    for (const value of iterable) {
            const product = reducer(accumulator, value)
            if (isReduced(product)) {
                accumulator = product.value
                break;
            } else {
                accumulator = product
            }
        }

        if (reducer.complete) {
            return reducer.complete(accumulator)
        } else {
            return accumulator
        }
    }



export default delegate(reduce, { excluded: [ Array ] }) as {
    <TAccumulator, TValueA, TValueB = TValueA>(reducer: Reducer<TAccumulator, TValueA>, accumulator: TAccumulator, xs: Iterable<TValueA>): TAccumulator
    <TAccumulator, TValueA, TValueB = TValueA>(reducer: Reducer<TAccumulator, TValueA>, accumulator: TAccumulator): (xs: Iterable<TValueA>) => TAccumulator
    <TAccumulator, TValueA, TValueB = TValueA>(reducer: Reducer<TAccumulator, TValueA>): (accumulator: TAccumulator, xs: Iterable<TValueA>) => TAccumulator
    <TAccumulator, TValueA, TValueB = TValueA>(reducer: Reducer<TAccumulator, TValueA>): (accumulator: TAccumulator) => (xs: Iterable<TValueA>) => TAccumulator
}
