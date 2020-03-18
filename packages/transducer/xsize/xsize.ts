import Transducer from "../../type/Transducer/Transducer"
import Reducer, {Completion} from "../../type/Reducer/Reducer"
import isReduced from "../../reflect/isReduced/isReduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns
 */
const xsize = <TValue>(): Transducer<TValue, number> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, number>>) => {
        const state = {
            size: 0
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            state.size = state.size + 1
            return accumulator
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
