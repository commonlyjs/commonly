import reduced from "../../function/reduced/reduced"
import Predicate from "../../type/Predicate/Predicate"
import Reducer from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"
import Transduced from "../../type/Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
 * @returns a transducer function
 */
const xfind = <TValue>(predicate: Predicate<TValue>): Transducer<TValue> => {
    return <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValue>>) => {
        const transduced = (accumulator: TAccumulator, value: TValue) => {
            if (predicate(value)) {
                return reduced(reducer(accumulator, value))
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
}



export default xfind
