import Reducer from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"
import reduced from "../../function/reduced/reduced"
import Transduced from "../../type/Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param start
 * @param end
 * @returns
 */
const xslice = <TValue>(start: number, end: number): Transducer<TValue> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValue>>) => {
        const transduced = (accumulator: TAccumulator, value: TValue) => {
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

        transduced.initial = () => {
            return reducer.initial()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xslice
