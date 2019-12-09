import Predicate from "../../type/Predicate/Predicate"
import Reducer from "../../type/Reducer/Reducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function
 * @param xf - is a transducer function
 * @returns a transducer function
 */
const xfilter = <TAccumulator, TValue>(predicate: Predicate<TValue>, xf: Reducer<TAccumulator, TValue>): Reducer<TAccumulator, TValue> => {
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
