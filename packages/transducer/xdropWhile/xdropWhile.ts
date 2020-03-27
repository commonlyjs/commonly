import Transducer from "../../type/Transducer/Transducer"
import Predicate from "../../type/Predicate/Predicate"
import Reducer, {Completion} from "../../type/Reducer/Reducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate
 * @returns
 */
const xdropWhile = <TValue>(predicate: Predicate<TValue>): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const transduced = (accumulator: TAccumulator, value: TValue) => {
            if (predicate(value)) {
                return accumulator
            } else {
                return reducer(accumulator, value)
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



export default xdropWhile
