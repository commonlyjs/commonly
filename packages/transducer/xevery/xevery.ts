import Transducer from "../../type/Transducer/Transducer"
import Reducer, {Completion} from "../../type/Reducer/Reducer"
import isReduced from "../../reflect/isReduced/isReduced"
import Predicate from "../../type/Predicate/Predicate"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate
 * @returns
 */
const xevery = <TValue>(predicate: Predicate<TValue>): Transducer<TValue, boolean> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, boolean>>) => {
        const state = {
            flag: true
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            state.flag = state.flag && predicate(value)
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



export default xevery
