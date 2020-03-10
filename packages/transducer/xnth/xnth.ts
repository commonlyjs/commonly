import Transducer from "../../type/Transducer/Transducer"
import xslice from "../xslice/xslice"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param i
 * @returns
 */
const xnth = <TValue>(i: number): Transducer<TValue> =>
    xslice(i, i + 1)



export default xnth
