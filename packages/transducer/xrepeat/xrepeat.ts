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
 * @param n
 * @returns
 */
const xrepeat = <TValue>(n: number): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
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

        transduced.complete = (accumulator: TAccumulator) => {
            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xrepeat
