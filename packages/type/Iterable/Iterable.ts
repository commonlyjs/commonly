/**
 * [Not documented yet]
 *
 * @since 1.0.0
 */
interface Iterable<TValue> {
    [Symbol.iterator](): Iterator<TValue>;
}


namespace Iterable {
    export type ExtractValue<T extends Iterable<unknown>> =
        T extends Iterable<infer U> ?
            U : never
}



export default Iterable