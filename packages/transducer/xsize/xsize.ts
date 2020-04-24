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
const xsize = <TValue>(): Transducer<TValue, number> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, number>>) => {
        const state = {
            size: 0
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            state.size = state.size + 1
            return accumulator
        }

        transduced.initial = () => {
            return reducer.initial()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            const product = reducer(accumulator, state.size)
            if (isReduced(product)) {
                accumulator = product.value
            } else {
                accumulator = product
            }

            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xsize
