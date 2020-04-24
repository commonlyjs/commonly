import Transducer from "../../type/Transducer/Transducer"
import Reducer from "../../type/Reducer/Reducer"
import isReduced from "../../reflect/isReduced/isReduced"
import Transduced from "../../type/Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param n
 * @returns
 */
const xrepeat = <TValue>(n: number): Transducer<TValue> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValue>>) => {
        const transduced = (accumulator: TAccumulator, value: TValue) => {
            for (let i = 0; i < n; i++) {
                const product = reducer(accumulator, value)
                if (isReduced(product)) {
                    break
                } else {
                    accumulator = product
                }
            }

            return accumulator
        }

        transduced.initial = () => {
            return reducer.initial()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xrepeat
