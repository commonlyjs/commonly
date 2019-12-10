import Predicate from "../../type/Predicate/Predicate"
import Reducer from "../../type/Reducer/Reducer"
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
    (xf: Reducer<TAccumulator, TValue>) => {
        const transducer = (accumulator: TAccumulator, value: TValue) => {
            if (predicate(value)) {
                return xf(accumulator, value)
            } else {
                return accumulator
            }
        }

        return transducer
    }


    
export default xfilter
