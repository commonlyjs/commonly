import Transducer from "../../type/Transducer/Transducer"
import Predicate from "../../type/Predicate/Predicate"
import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param predicate
 * @returns
 */
const xdropWhile = <TValue>(predicate: Predicate<TValue>): Transducer<TValue> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValue>>) => {
        const state = {
            dropping: true
        }

        const transduced = (accumulator: TAccumulator, value: TValue) => {
            if (state.dropping && !predicate(value)) {
                state.dropping = false
            }

            if (state.dropping) {
                return accumulator
            } else {
                return reducer(accumulator, value)
            }
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            state.dropping = true
            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xdropWhile
