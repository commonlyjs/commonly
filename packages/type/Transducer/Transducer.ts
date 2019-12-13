import Reducer from "../Reducer/Reducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
type Transducer<TAccumulator, TValueA, TValueB = TValueA> =
    (reducer: Reducer<TAccumulator, TValueB>) =>
        Reducer<TAccumulator, TValueA>



export default Transducer
