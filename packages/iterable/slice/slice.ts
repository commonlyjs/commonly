import reducer from "../../function/reducer/reducer"
import xslice from "../../transducer/xslice/xslice"
import transduce from "../transduce/transduce"
import empty from '../../function/empty/empty'



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param start
 * @param end
 * @param iterable
 * @returns
 */
const slice = <TValue>(start: number, end: number, iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xslice(start, end), reducer(iterable), empty(iterable), iterable)
}


export default slice
