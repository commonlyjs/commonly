/**
 * The Comparator type represents a comparison function, which imposes a total ordering on enumerable lists.
 *
 * @since 1.0.0
 */
type Comparator<TValue> = (a: TValue, b: TValue) =>
    number



export default Comparator