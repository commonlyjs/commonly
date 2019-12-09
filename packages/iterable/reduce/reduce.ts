import curry from "../../function/curry/curry"
import Reducer from "../../type/Reducer/Reducer"



/**
 * Perform a reduction on a given iterable by applying a given {@link @commonly/type:Reducer | reducer function} to each yield value
 *  from an iterable.
 *
 * Often reduce function happens to be called a {@link https://en.wikipedia.org/wiki/Fold_(higher-order_function) | fold function}
 *  in other programming environments.
 *
 * @since 1.0.0
 *
 * @param reducer - is a reducer function
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
const reduce = <TAccumulator, TValue>(reducer: Reducer<TAccumulator, TValue>, accumulator: TAccumulator, iterable: Iterable<TValue>) => {
    for (const value of iterable) {
        accumulator = reducer(accumulator, value)
    }

    return accumulator
}



export default curry(reduce) as {
    <TAccumulator, TValue>(reducer: Reducer<TAccumulator, TValue>, accumulator: TAccumulator, xs: Iterable<TValue>): TAccumulator
    <TAccumulator, TValue>(reducer: Reducer<TAccumulator, TValue>, accumulator: TAccumulator): (xs: Iterable<TValue>) => TAccumulator
    <TAccumulator, TValue>(reducer: Reducer<TAccumulator, TValue>): (accumulator: TAccumulator, xs: Iterable<TValue>) => TAccumulator
    <TAccumulator, TValue>(reducer: Reducer<TAccumulator, TValue>): (accumulator: TAccumulator) => (xs: Iterable<TValue>) => TAccumulator
}
