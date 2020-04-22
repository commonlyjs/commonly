import reducing from "../../../function/reducing/reducing"
import isReduced from "../../../reflect/isReduced/isReduced"
import Reducer from "../../../type/Reducer/Reducer"
import Transduced from "../../../type/Transduced/Transduced"
import Transducer from "../../../type/Transducer/Transducer"


namespace Transducible {
    export const transduction = "@@transducible/transduction"
    export const reducingTerm = "@@transducible/reducingTerm"
    export const reducingSequence = "@@transducible/reducingSequence"
}


class LazyList<TValue> {
    static of<TValue>(...values: TValue[]): LazyList<TValue> {
        return new LazyList(values[Symbol.iterator]())
    }

    static from<TValue>(iterable: Iterable<TValue>): LazyList<TValue> {
        return new LazyList(iterable[Symbol.iterator]())
    }

    private readonly _iterator: Iterator<TValue>

    constructor(iterator?: Iterator<TValue>) {
        this._iterator = iterator || [][Symbol.iterator]()
    }

    [Symbol.iterator](): Iterator<TValue> {
        return this._iterator
    }

    [Transducible.reducingTerm]() {
        const reducer = <TValue>(accumulator: TValue | undefined, value: TValue) => {
            return value
        }

        reducer.initial = () => {
            return undefined
        }

        reducer.complete = <TValue>(accumulator: TValue | undefined) => {
            return accumulator
        }

        return reducer
    }

    reducer<TValue>() {
        const state = {
            buffer: [] as TValue[]
        }

        const reducer = (accumulator: LazyList<TValue>, value: TValue) => {
            state.buffer.push(value)
            return accumulator
        }

        // @ts-ignore
        reducer.initialize = (f) => {
            function* iterator() {
                yield* f(g)
            }

            function* g() {
                while (state.buffer.length) {
                    yield state.buffer.shift() as TValue
                }
            }

            return new LazyList<TValue>(iterator())
        }

        reducer.complete = (accumulator: LazyList<TValue>) => {
            return accumulator
        }

        reducer.transduction = () => {
            function* iterator() {

            }

            return iterator()
        }

        return reducer
    }

    // @ts-ignore
    transduction() {
        // Is it when? Or how? When and how?
        // function* iterator() {
        //
        // }
        //
        // return iterator
    }

    transduce<TAccumulator, TOutput>(transducer: Transducer<TValue, TOutput>, reducer: Transduced<Reducer<TAccumulator, TOutput>>): TAccumulator {
        const iterable = this
        // @ts-ignore
        let accumulator = reducer.initialize(iteration)

        // @ts-ignore
        function* iteration(g?) {
            const transduced = transducer(reducer)
            for (const value of iterable) {
                const product = transduced(accumulator, value)
                if (isReduced(product)) {
                    accumulator = product.value
                    break
                } else {
                    accumulator = product
                }

                if (g) yield* g()

                // Some kind of template method would be useful so I can yield on every loop.
                // I'm missing access to internal state of end reducer.
                // if (g) yield* g(h)
                // @ts-ignore
                // function* h(value) {
                //     yield value
                // }
            }
        }

        // @ts-ignore
        reducer.transduction()


        return accumulator
    }

    toArray() {
        const iterable = this
        const reducer = reducing.pushing
    }
}



export default LazyList