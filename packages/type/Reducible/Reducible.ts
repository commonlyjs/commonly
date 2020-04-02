import Reducer from "../Reducer/Reducer"



/**
 * [Not documented yet]
 *
 * @since 1.0.0
 */
interface Reducible<TAccumulator, TValue> {
    [Reducible.reducer](): Reducer<TAccumulator, TValue>
}


namespace Reducible {
    export const reducer = "@@reducer"
}



export default Reducible