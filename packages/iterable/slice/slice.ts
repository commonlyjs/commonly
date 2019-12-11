import xslice from "../../transducer/xslice/xslice"
import seq from "../seq/seq"



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
const slice = <TValue>(start: number, end: number, iterable: Iterable<TValue>) => {
    return seq(xslice(start, end), iterable)
}



export default slice
