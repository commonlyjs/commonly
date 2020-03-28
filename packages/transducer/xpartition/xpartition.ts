import Transducer from "../../type/Transducer/Transducer"
import Reducer from "../../type/Reducer/Reducer"
import isReduced from "../../reflect/isReduced/isReduced"
import Transduced from "../../type/Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns
 */
const xpartition = <TValue>(n: number): Transducer<TValue, TValue[]> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValue[]>>) => {
        const state = {
            buffer: [] as TValue[]
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            state.buffer.push(value)
            if (state.buffer.length === n) {
                const product = reducer(accumulator, state.buffer)
                state.buffer = []
                return product
            } else {
                return accumulator
            }
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            if (state.buffer.length !== 0) {
                const product = reducer(accumulator, state.buffer)
                state.buffer = []
                if (isReduced(product)) {
                    accumulator = product.value
                } else {
                    accumulator = product
                }
            }

            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xpartition
