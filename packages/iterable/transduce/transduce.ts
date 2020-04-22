import isReduced from "../../reflect/isReduced/isReduced"
import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"
import Transducer from "../../type/Transducer/Transducer"
import reduce from "../reduce/reduce"
import reducing from "../../function/reducing/reducing"
import delegate from "../../function/delegate/delegate"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param transducer
 * @param iterable
 * @param reducer
 * @param accumulator
 * @returns
 */
const transduce = <TAccumulator, TValueA, TValueB = TValueA>(
    transducer: Transducer<TValueA, TValueB>,
    iterable: Iterable<TValueA>,
    reducer: Transduced<Reducer<TAccumulator, TValueB>> = reducing(iterable),
    accumulator: TAccumulator = reducer.initialize()
): TAccumulator => {
    const transduced = (accumulator: TAccumulator, value: TValueB) => {
        return reducer(accumulator, value)
    }

    transduced.initialize = reducer.initialize || (
        () => {
            return accumulator
        }
    )

    transduced.complete = reducer.complete || (
        (accumulator: TAccumulator) => {
            return accumulator
        }
    )

    const xtransducer = transducer(transduced)
    for (const value of iterable) {
        const product = xtransducer(accumulator, value)
        if (isReduced(product)) {
            accumulator = product.value
            break
        } else {
            accumulator = product
        }
    }

    if (xtransducer.complete) {
        return xtransducer.complete(accumulator)
    } else {
        return accumulator
    }

    // return reduce(transducer(transduced), accumulator, iterable)
}



export default transduce as {
    <TAccumulator, TValueA, TValueB = TValueA>(
        transducer: Transducer<TValueA, TValueB>,
        iterable: Iterable<TValueA>,
        reducer: Reducer<TAccumulator, TValueB>,
        accumulator: TAccumulator
    ): TAccumulator

    <TAccumulator, TValueA, TValueB = TValueA>(
        transducer: Transducer<TValueA, TValueB>,
        iterable: Iterable<TValueA>,
        reducer: Transduced<Reducer<TAccumulator, TValueB>>
    ): TAccumulator

    <TAccumulator, TValueA, TValueB = TValueA>(
        transducer: Transducer<TValueA, TValueB>,
        iterable: Iterable<TValueA>
    ): TAccumulator
}
