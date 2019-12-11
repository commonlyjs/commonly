import Mapper from "../../type/Mapper/Mapper"
import Reduced from "../../type/Reduced/Reduced"
import Reducer from "../../type/Reducer/Reducer"
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
    (xf: Reducer<TAccumulator | Reduced<TAccumulator>, TValueB>) => {
        const transducer:Reducer<TAccumulator | Reduced<TAccumulator>, TValueA> = (accumulator, value) => {
            return xf(accumulator, mapper(value))
        }
    
        return transducer
    }



export default xmap
