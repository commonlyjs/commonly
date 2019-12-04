/**
 * The Reducer type represents a function which takes an accumulator and a value and returns a value,
 * a {@link https://en.wikipedia.org/wiki/Fold_(higher-order_function) | fold function}.
 *
 * @since 1.0.0
 */
type Reducer<TAccumulator, TResult, TValue> =
    (accumulator: TAccumulator, value: TValue) =>
        TResult



export default Reducer
