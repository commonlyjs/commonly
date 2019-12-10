import xmap from "../../transducer/xmap/xmap"
import Mapper from "../../type/Mapper/Mapper"
import seq from "../seq/seq"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 * 
 * @param mapper
 * @param iterable
 * @returns
 */
const map = <TAccumulator, TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, iterable: Iterable<TValueA>) => {
    return seq(xmap(mapper), iterable)
}



export default map
