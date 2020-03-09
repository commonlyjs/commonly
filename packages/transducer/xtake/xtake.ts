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
const xtake = <TValue>(n: number): Transducer<TValue> => {
    return xslice(0, n)
}



export default xtake
