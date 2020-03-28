import Transducer from "../../type/Transducer/Transducer"
import Reducer from "../../type/Reducer/Reducer"
import isReduced from "../../reflect/isReduced/isReduced"
import Predicate from "../../type/Predicate/Predicate"
import reduced from "../../function/reduced/reduced"
import Transduced from "../../type/Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate
 * @returns
 */
const xsome = <TValue>(predicate: Predicate<TValue>): Transducer<TValue, boolean> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, boolean>>) => {
        const state = {
            flag: false
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            state.flag = state.flag || predicate(value)
            if (predicate(value)) {
                return reduced(accumulator)
            }

            return accumulator
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            const product = reducer(accumulator, state.flag)
            if (isReduced(product)) {
                return reducer.complete(product.value)
            } else {
                return reducer.complete(product)
            }
        }

        return transduced
    }



export default xsome
