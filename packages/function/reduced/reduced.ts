import isReduced from "../../reflect/isReduced/isReduced"
import Reduced from "../../type/Reduced/Reduced"



/**
 * [Not yet documented]
 *
 * @since
 *
 * @param value
 * @returns
 */
const reduced = <TValue>(value: TValue | Reduced<TValue>): Reduced<TValue> => {
    if (isReduced(value)) {
        return value   
    } else {
        return { reduced: true, value }
    }
}



export default reduced
