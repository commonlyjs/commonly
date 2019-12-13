import empty from "../../function/empty/empty"
import reducer from "../../function/reducer/reducer"
import xmap from "../../transducer/xmap/xmap"
import Mapper from "../../type/Mapper/Mapper"
import transduce from "../transduce/transduce"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param mapper
 * @param iterable
 * @returns
 */
const map = <TAccumulator, TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, iterable: Iterable<TValueA>): Iterable<TValueB> => {
    return transduce(xmap(mapper), reducer(iterable) as any, empty(iterable), iterable)
}



export default map
