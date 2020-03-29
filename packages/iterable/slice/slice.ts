import xslice from "../../transducer/xslice/xslice"
import transduce from "../transduce/transduce"
import delegate from '../../function/delegate/delegate'



/**
 * Creates a new iterable of the same type as the one given, where only values from start to end are included.
 *
 * @since 1.0.0
 *
 * @param start - is a beginning of a slice
 * @param end - is an end of a slice
 * @param iterable - is an iterable to be sliced from
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { slice } from "@commonly/iterable"
 *
 * slice(1, 5, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 1, 1, 2, 3, 5 ]
 * ```
 */
const slice = <TValue>(start: number, end: number, iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xslice(start, end), iterable)
}


export default delegate(slice)
