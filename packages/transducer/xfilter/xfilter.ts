import Predicate from "../../type/Predicate/Predicate"
import Reducer, { Completion } from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
 * @returns a transducer function
 */
const xfilter = <TValue>(predicate: Predicate<TValue>): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const transduced = (accumulator: TAccumulator, value: TValue) => {
            if (predicate(value)) {
                return reducer(accumulator, value)
            } else {
                return accumulator
            }
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xfilter
