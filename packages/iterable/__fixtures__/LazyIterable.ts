import reducing from "../../function/reducing/reducing"



class LazyIterable<TValue> {
    private readonly _values: TValue[]

    constructor(values: TValue[]) {
        this._values = values
    }

    *[Symbol.iterator]() {
        for (const value of this._values) {
            yield /**/value
        }
    }

    ["@@reducer"]() {
        const reducer = (accumulator: LazyIterable<TValue>, value: TValue) => {
            return accumulator
        }
    }

    // @ts-ignore
    transduce(transducer) {
        const reducer = transducer(reducing.pushing)
        let accumulator: never[] = []

        for (const value of this._values) {
            accumulator = reducer(accumulator, value)
            while (accumulator.length) {
                accumulator.pop()
            }
        }

        return new LazyIterable(accumulator)
    }
}



export default LazyIterable


/*

    const reduce = (reducer, iterable: LazyArray) => {
        const product = new LazyArray()

        return product
    }

    const xs = LazyArray([ 1, 2, 3 ])
    const ys = map(x => x * 2, xs)

 */