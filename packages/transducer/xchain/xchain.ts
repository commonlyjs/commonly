import isReduced from "../../reflect/isReduced/isReduced"
import Mapper from "../../type/Mapper/Mapper"
import Reducer, { Completion } from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param mapper - is a mapping function
 * @returns a transducing function
 */
const xchain = <TValueA, TValueB = TValueA>(mapper: Mapper<TValueA, TValueB[]>): Transducer<TValueA, TValueB> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValueB>>) => {
        const transduced = (accumulator: TAccumulator, value: TValueA) => {
            for (const x of mapper(value)) {
                const product = reducer(accumulator, x)
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



export default xchain
