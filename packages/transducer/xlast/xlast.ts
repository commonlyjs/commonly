import Transducer from "../../type/Transducer/Transducer"
import Predicate from "../../type/Predicate/Predicate"
import Reducer, {Completion} from "../../type/Reducer/Reducer"
import reduced from "../../function/reduced/reduced"
import isReduced from "../../reflect/isReduced/isReduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns
 */
const xlast = <TValue>(): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const state = {
            value: undefined as TValue | undefined
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            state.value = value
            return accumulator
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            if (state.value) {
                const product = reducer(accumulator, state.value)
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



export default xlast
