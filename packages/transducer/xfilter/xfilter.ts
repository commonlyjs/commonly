import Predicate from "../../type/Predicate/Predicate"
import Transducer from "../../type/Transducer/Transducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
 * @returns a transducer function
 */
const xfilter = <TAccumulator, TValue>(predicate: Predicate<TValue>): Transducer<TAccumulator, TValue> =>
    (reducer) => {
        const transduced = (accumulator: TAccumulator, value: TValue) => {
            if (predicate(value)) {
                return reducer(accumulator, value)
            } else {
                return accumulator
            }
        }

        return transduced
    }



export default xfilter
