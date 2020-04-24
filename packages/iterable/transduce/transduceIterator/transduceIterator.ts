import reducing from "../../../function/reducing/reducing"
import isReduced from "../../../reflect/isReduced/isReduced"
import Reducer from "../../../type/Reducer/Reducer"
import Transduced from "../../../type/Transduced/Transduced"
import Transducer from "../../../type/Transducer/Transducer"



const transduceIterator = <TAccumulator, TValueA, TValueB = TValueA>(
    transducer: Transducer<TValueA, TValueB>,
    iterable: Iterable<TValueA>,
    reducer: Transduced<Reducer<TAccumulator, TValueB>> = reducing(iterable),
    accumulator: TAccumulator = reducer.initialize()
): TAccumulator => {
    const transduced = transducer(reducer)
    for (const value of iterable) {
        const product = transduced(accumulator, value)
        if (isReduced(product)) {
            accumulator = product.value
            break
        } else {
            accumulator = product
        }
    }

    if (transduced.complete) {
        return transduced.complete(accumulator)
    } else {
        return accumulator
    }
}



export default transduceIterator