/**
 * The Identity type represents a function which takes a single value as an argument and returns that value,
 * an {@link https://en.wikipedia.org/wiki/Identity_function | identity function}.
 *
 * @since 1.0.0
 */
type Identity<TValue> =
    (value: TValue) => TValue



export default Identity
