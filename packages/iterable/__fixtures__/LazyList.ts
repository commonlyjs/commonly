import reducing from "../../function/reducing/reducing"
import isReduced from "../../reflect/isReduced/isReduced"
import Transducer from "../../type/Transducer/Transducer"



class LazyList<TValue> {
    static of<TValue>(...values: TValue[]): LazyList<TValue> {
        return new LazyList(values[Symbol.iterator]())
    }

    static from<TValue>(iterable: Iterable<TValue>): LazyList<TValue> {
        return new LazyList(iterable[Symbol.iterator]())
    }

    private readonly _iterator: Iterator<TValue>

    constructor(iterator: Iterator<TValue>) {
        this._iterator = iterator
    }

    [Symbol.iterator](): Iterator<TValue> {
        return this._iterator
    }

    reducer() {
        const buffer: TValue[] = []

        function* generator() {
            for (const value of buffer) {
               yield value
            }
        }

        const reducer = (accumulator: LazyList<TValue>, value: TValue) => {
            buffer.push(value)
            return accumulator
        }

        reducer.initialize = () => {
            return new LazyList<TValue>(generator())
        }

        reducer.complete = (accumulator: LazyList<TValue>) => {
            return accumulator
        }

        return reducer
    }

}
const transduceLazy2 = <TValue>(transducer: Transducer<TValue>, iterable: Iterable<TValue>, accumulator: LazyList<TValue>): LazyList<TValue> => {
    const reducer: any = transducer(reducing(iterable))

    function* generator() {
        for (const value of iterable) {
            const product = reducer(accumulator, value)
            if (isReduced(product)) {
                break
            } else {
                accumulator = product
            }
        }
    }

    return new LazyList<TValue>(generator())
}


const transduceLazy = <TValue>(transducer: Transducer<TValue>, iterable: Iterable<TValue>): LazyList<TValue> => {
    const reducer = transducer(reducing.pushing)
    let accumulator: TValue[] = []

    function* run() {
        for (const value of iterable) {
            const product = reducer(accumulator, value) 
            if (isReduced(product)) {
                break
            } else {
                accumulator = product
            }

            yield* accumulator
        }
    }

    return new LazyList<TValue>(run())
}



export default LazyList


/*

    const list = LazyList.of(0, 1, 1, 2, 3, 5, 8)

    filter(isOdd,
        map(add(2),
            list
        )
    )


 */