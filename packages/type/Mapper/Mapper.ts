/**
 * The Mapper type represents a function which always a single value as an argument and returns a value,
 * a {@link https://en.wikipedia.org/wiki/Map_(higher-order_function) | mapper function}.
 *
 * @since 1.0.0
 */
type Mapper<TValueA, TValueB> =
    (value: TValueA) => TValueB



export default Mapper
