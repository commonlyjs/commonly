/**
 * The Predicate type represents a function which takes a single value as an argument and returns a boolean,
 * a {@link https://en.wikipedia.org/wiki/Predicate_(mathematical_logic) | predicate function}.
 *
 * @since 1.0.0
 */
type Predicate<TValue> =
    (value: TValue) => boolean



export default Predicate
