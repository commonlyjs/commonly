import Reducer from "../Reducer/Reducer"
import Transduced from "../Transduced/Transduced"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
type Transducer<TValueA, TValueB = TValueA> =
    <TAccumulator>(reducer: Transduced<Reducer<TAccumulator, TValueB>>) =>
        Transduced<Reducer<TAccumulator, TValueA>>



export default Transducer
