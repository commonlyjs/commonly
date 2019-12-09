import curry from "../../function/curry/curry"
import Mapper from "../../type/Mapper/Mapper"
import Reducer from "../../type/Reducer/Reducer"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 * 
 * @param mapper - is a mapping function
 * @param xf - is a transducer function
 * @returns a transducer function
 */
const xmap = <TAccumulator, TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, xf: Reducer<TAccumulator, TValueB>): Reducer<TAccumulator, TValueA> => {
    const transducer: Reducer<TAccumulator, TValueA> = (accumulator: TAccumulator, value: TValueA) => {
        return xf(accumulator, mapper(value))
    }

    return transducer
}



export default curry(xmap)
