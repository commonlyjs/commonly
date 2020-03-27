import Transducer from "../../type/Transducer/Transducer"
import Predicate from "../../type/Predicate/Predicate"
import Reducer, {Completion} from "../../type/Reducer/Reducer"
import reduced from "../../function/reduced/reduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate
 * @returns
 */
const xtakeWhile = <TValue>(predicate: Predicate<TValue>): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const transduced = (accumulator: TAccumulator, value: TValue) => {
            if (predicate(value)) {
                return reducer(accumulator, value)
            } else {
                return reduced(accumulator)
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



export default xtakeWhile
