import Comparator from "../../type/Comparator/Comparator"
import Transducer from "../../type/Transducer/Transducer"
import Reducer, {Completion} from "../../type/Reducer/Reducer"
import isReduced from "../../reflect/isReduced/isReduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param comparator
 * @returns
 */
const xsort = <TValue>(comparator: Comparator<TValue>): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const state = {
            buffer: [] as TValue[]
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            state.buffer.push(value)
            return accumulator
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            state.buffer = state.buffer.sort(comparator)
            for (const value of state.buffer) {
                const product = reducer(accumulator, value)
                if (isReduced(product)) {
                    break
                } else {
                    accumulator = product
                }
            }

            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xsort
