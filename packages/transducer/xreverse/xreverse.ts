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
const xreverse = <TValue>(): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const state = {
            values: [] as TValue[]
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            state.values.unshift(value)
            return accumulator
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            for (const value of state.values) {
                const product = reducer(accumulator, value)
                if (isReduced(product)) {
                    accumulator = product.value
                    break
                } else {
                    accumulator = product
                }
            }

            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xreverse
