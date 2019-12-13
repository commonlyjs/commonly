import empty from "../../function/empty/empty"
import reducer from "../../function/reducer/reducer"
import xtake from "../../transducer/xtake/xtake"
import transduce from "../transduce/transduce"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param n
 * @param iterable
 * @returns
 */
const take = <TAccumulator, TValue>(n: number, iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xtake(n), reducer(iterable), empty(iterable), iterable)
}



export default take
