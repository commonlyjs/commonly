import reducing from "../../../function/reducing/reducing"
import isReduced from "../../../reflect/isReduced/isReduced"
import Reducer from "../../../type/Reducer/Reducer"
import Transduced from "../../../type/Transduced/Transduced"
import Transducer from "../../../type/Transducer/Transducer"



const transduceLazyIterator = <TValueA, TValueB = TValueA>(
    transducer: Transducer<TValueA, TValueB>,
    iterable: Iterable<TValueA>,
    reducer: Transduced<Reducer<IterableIterator<TValueB>, TValueB>> = reducing(iterable),
    accumulator: IterableIterator<TValueB> = reducer.initial()
): IterableIterator<TValueB> => {
    const state = {
        buffer: [] as TValueB[],
        reduced: false
    }

    function* flush(queue: TValueB[]): IterableIterator<TValueB> {
        while (queue.length) {
            yield queue.shift() as TValueB
        }
    }

    function* iterator() {
        const transduced = transducer(reducing.pushing)
        for (const value of iterable) {
            const product = transduced(state.buffer, value)
            if (isReduced(product)) {
                state.buffer = product.value
                state.reduced = true
            } else {
                state.buffer = product
            }

            yield* flush(state.buffer)
            if (state.reduced) {
                break
            }
        }

        state.buffer = transduced.complete(state.buffer)
        yield* flush(state.buffer)
    }

    return iterator()
}



export default transduceLazyIterator