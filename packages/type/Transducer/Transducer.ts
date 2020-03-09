import Reducer from "../Reducer/Reducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
type Transducer<TValueA, TValueB = TValueA> =
    <TAccumulator>(reducer: Reducer.Completing<TAccumulator, TValueB>) =>
        Reducer.Completing<TAccumulator, TValueA>



export default Transducer
