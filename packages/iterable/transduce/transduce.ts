import empty from "../../function/empty/empty"
import Reducer from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"
import reduce from "../reduce/reduce"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param transducer
 * @param reducer
 * @param accumulator
 * @param iterable
 * @returns
 */
const transduce = <TAccumulator, TValueA, TValueB = TValueA, TReturnValue = TAccumulator>(
    transducer: Transducer<TValueA, TValueB>,
    reducer: Reducer<TAccumulator, TValueB>,
    accumulator: TAccumulator,
    iterable: Iterable<TValueA>
): TReturnValue => {
    const completing = (accumulator: TAccumulator, value: TValueB) => {
        return reducer(accumulator, value)
    }

    completing.initialize = () => {
        return empty(accumulator) as TAccumulator
    }

    completing.complete = (accumulator: TAccumulator) => {
        return accumulator
    }

    return reduce<TAccumulator, TValueA, TValueB, TReturnValue>(transducer(completing), accumulator, iterable)
}



export default transduce
