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
const xreverse = <TValue>(): Transducer<TValue> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValue>>) => {
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
