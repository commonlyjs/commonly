import Transducer from "../../type/Transducer/Transducer"
import xslice from "../xslice/xslice"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @returns
 */
const xhead = <TValue>(): Transducer<TValue> =>
    xslice(0, 1)



export default xhead
