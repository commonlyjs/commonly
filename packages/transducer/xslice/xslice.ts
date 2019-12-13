import reduced from "../../function/reduced/reduced"
import Reducer from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param start
 * @param end
 * @returns
 */
const xslice = <TAccumulator, TValue>(start: number, end: number): Transducer<TAccumulator, TValue> =>
    (reducer) => {
        const transduced: Reducer<TAccumulator, TValue> = (accumulator, value) => {
            if (start > 0) {
                end = end - 1
                start = start - 1
                return accumulator
            } else if (end > 0) {
                end = end - 1
                return reducer(accumulator, value)
            } else {
                return reduced(accumulator)
            }
        }

        return transduced
    }



export default xslice
