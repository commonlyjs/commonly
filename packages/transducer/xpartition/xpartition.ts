import isReduced from "../../reflect/isReduced/isReduced"
import Predicate from "../../type/Predicate/Predicate"
import Reducer, { Completion } from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"



const xpartition = <TValue>(predicate: Predicate<TValue>): Transducer<TValue> =>
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValue>>) => {
        const state = {
            partitionA: reducer.initialize(),
            partitionB: reducer.initialize()
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            if (predicate(value)) {
                const product = reducer(state.partitionA, value)
                if (!isReduced(product)) {
                    state.partitionA = product
                }
            } else {
                const product = reducer(state.partitionB, value)
                if (!isReduced(product)) {
                    state.partitionB = product
                }
            }

            return accumulator
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xpartition
