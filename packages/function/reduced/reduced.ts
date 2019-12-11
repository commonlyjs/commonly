import Reduced from "../../type/Reduced/Reduced"



/**
 * [Not yet documented]
 *
 * @since
 *
 * @param value
 * @returns
 */
const reduced = <TValue>(value: TValue): Reduced<TValue> => {
    return { reduced: true, value }
}



export default reduced
