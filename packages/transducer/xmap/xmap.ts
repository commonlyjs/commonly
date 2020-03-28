import Mapper from "../../type/Mapper/Mapper"
import Reducer from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"
import Transduced from "../../type/Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param mapper - is a mapping function
 * @returns a transducing function
 */
const xmap = <TValueA, TValueB = TValueA>(mapper: Mapper<TValueA, TValueB>): Transducer<TValueA, TValueB> =>
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValueB>>) => {
        const transduced = (accumulator: TAccumulator, value: TValueA) => {
            return reducer(accumulator, mapper(value))
        }

        transduced.initialize = () => {
            return reducer.initialize()
        }

        transduced.complete = (accumulator: TAccumulator) => {
            return reducer.complete(accumulator)
        }

        return transduced
    }



export default xmap
