import reduced from "../../function/reduced/reduced"
import Reduced from "../../type/Reduced/Reduced"
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
    (xf: Reducer<TAccumulator | Reduced<TAccumulator>, TValue>) => {
        const transducer: Reducer<TAccumulator | Reduced<TAccumulator>, TValue> = (accumulator, value) => {
            if (start > 0) {
                end = end - 1
                start = start - 1
                return accumulator
            } else {
                if (end > 0) {
                    end = end - 1
                    return xf(accumulator, value)
                } else {
                    return reduced(accumulator)
                }
            }
        }

        return transducer
    }



export default xslice
