import Mapper from "../../type/Mapper/Mapper"
import Transducer from "../../type/Transducer/Transducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param mapper - is a mapping function
 * @returns a transducing function
 */
const xmap = <TAccumulator, TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>): Transducer<TAccumulator, TValueA, TValueB> =>
    (reducer) => {
        const transduced = (accumulator: TAccumulator, value: TValueA) => {
            return reducer(accumulator, mapper(value))
        }

        return transduced
    }



export default xmap
