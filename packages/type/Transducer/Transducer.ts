import Reduced from "../Reduced/Reduced"
import Reducer from "../Reducer/Reducer"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 */
type Transducer<TAccumulator, TValueA, TValueB = TValueA> = 
    (reducer: Reducer<TAccumulator | Reduced<TAccumulator>, TValueB>) => Reducer<TAccumulator | Reduced<TAccumulator>, TValueA>


export default Transducer
