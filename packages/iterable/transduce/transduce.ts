import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"
import Transducer from "../../type/Transducer/Transducer"
import reducing from "../../function/reducing/reducing"
import transduceIterator from "./transduceIterator/transduceIterator"
import transduceLazyIterator from "./transduceLazyIterator/transduceLazyIterator"



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
    accumulator: TAccumulator = reducer.initial()
): TAccumulator => {
    const transduced = (accumulator: TAccumulator, value: TValueB) => {
        return reducer(accumulator, value)
    }

    transduced.initial = reducer.initial || (
        () => {
            return accumulator
        }
    )

    transduced.complete = reducer.complete || (
        (accumulator: TAccumulator) => {
            return accumulator
        }
    )

    return transduce.iterator(transducer, iterable, transduced, accumulator)
}


transduce.iterator = transduceIterator
transduce.lazyIterator = transduceLazyIterator



export default transduce as unknown as {
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
