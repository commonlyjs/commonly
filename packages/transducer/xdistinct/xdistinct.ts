import Transducer from "../../type/Transducer/Transducer"
import Reducer, {Completion} from "../../type/Reducer/Reducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns
 */
const xdistinct = <TValue>(): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const state = {
            values: [] as TValue[]
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            if (state.values.includes(value)) {
                return accumulator
            } else {
                state.values.push(value)
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



export default xdistinct
