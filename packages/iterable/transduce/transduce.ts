import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"
import Transducer from "../../type/Transducer/Transducer"
import Transducible from "../../type/Transducible/Transducible"
import transduceIterator from "./transduceIterator/transduceIterator"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param transducer
 * @param sequence
 * @param reducer
 * @param accumulator
 * @returns
 */
const transduce = <TAccumulator, TValueA, TValueB = TValueA>(
    transducer: Transducer<TValueA, TValueB>,
    reducer: Transduced<Reducer<TAccumulator, TValueB>>,
    sequence: Transducible<TValueA>,
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

    if (sequence.transduce) {
        return sequence.transduce(transducer, transduced, accumulator)
    } else {
        // TODO: Missing error handling, what if a `sequence` is not an instance of Iterable<?>?
        return transduceIterator(transducer, transduced, sequence as any)
    }

}



export default transduce as unknown as {
    <TAccumulator, TValueA, TValueB = TValueA>(
        transducer: Transducer<TValueA, TValueB>,
        reducer: Reducer<TAccumulator, TValueB>,
        sequence: Transducible<TValueA>,
        accumulator: TAccumulator
    ): TAccumulator

    <TAccumulator, TValueA, TValueB = TValueA>(
        transducer: Transducer<TValueA, TValueB>,
        reducer: Transduced<Reducer<TAccumulator, TValueB>>,
        sequence: Transducible<TValueA>
    ): TAccumulator
}
