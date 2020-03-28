import Transducer from "../../type/Transducer/Transducer"
import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns
 */
const xdistinct = <TValue>(): Transducer<TValue> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValue>>) => {
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
