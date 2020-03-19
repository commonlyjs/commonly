import Transducer from "../../type/Transducer/Transducer"
import Reducer, {Completion} from "../../type/Reducer/Reducer"
import isReduced from "../../reflect/isReduced/isReduced"
import Predicate from "../../type/Predicate/Predicate"
import Mapper from "../../type/Mapper/Mapper"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns
 */
const xpartitionBy = <TValue, TBy>(mapper: Mapper<TValue, TBy>): Transducer<TValue, TValue[]> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue[]>>) => {
        const constants = {
            UNSET: Symbol()
        }

        const state = {
            buffer: [] as TValue[],
            previousValue: constants.UNSET as TBy | typeof constants.UNSET
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            const currentValue = mapper(value)
            if (state.previousValue === constants.UNSET) {
                state.previousValue = currentValue
            }

            if (currentValue !== state.previousValue) {
                const product = reducer(accumulator, state.buffer)
                state.buffer = [ value ]
                state.previousValue = currentValue
                return product
            } else {
                state.buffer.push(value)
                return accumulator
            }
        }

        transduced.complete = (accumulator: TAccumulator) => {
            if (state.buffer.length !== 0) {
                const product = reducer(accumulator, state.buffer)
                state.buffer = []
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



export default xpartitionBy
