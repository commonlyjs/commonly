import Transducer from "../../type/Transducer/Transducer"
import xslice from "../xslice/xslice"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param n
 * @returns
 */
const xdrop = <TValue>(n: number): Transducer<TValue> => {
    return xslice(n, Infinity)
}



export default xdrop
