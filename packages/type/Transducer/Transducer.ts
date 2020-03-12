import Reducer, { Completion } from "../Reducer/Reducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
type Transducer<TValueA, TValueB = TValueA> =
    <TAccumulator>(reducer: Completion<Reducer<TAccumulator, TValueB>>) =>
        Completion<Reducer<TAccumulator, TValueA>>



export default Transducer
