import Reducer, { Completion } from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"
import isReduced from "../../reflect/isReduced/isReduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns a transducing function
 */
const xflatten = <TValue>(): Transducer< TValue | TValue[], TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const transduced = (accumulator: TAccumulator, value: TValue | TValue[]) => {
            if (Array.isArray(value)) {
                for (const x of value) {
                    const product = reducer(accumulator, x)
                    if (isReduced(product)) {
                        break
                    } else {
                        accumulator = product
                    }
                }

                return accumulator
            } else {
                return reducer(accumulator, value)
            }
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xflatten
