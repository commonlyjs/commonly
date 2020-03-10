import Transducer from "../../type/Transducer/Transducer"
import xslice from "../xslice/xslice"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns
 */
const xtail = <TValue>(): Transducer<TValue> => {
    return xslice(1, Infinity)
}



export default xtail
