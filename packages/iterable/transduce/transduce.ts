import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"
import Transducer from "../../type/Transducer/Transducer"
import reduce from "../reduce/reduce"
import reducing from "../../function/reducing/reducing"



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

    transduced.initialize = () => {
        return accumulator
    }

    transduced.complete = (accumulator: TAccumulator) => {
        return accumulator
    }

    return reduce(transducer(transduced), accumulator, iterable)
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
