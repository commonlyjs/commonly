import Completion from "../Completion/Completion"
import Reducer from "../Reducer/Reducer"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 */
type Transducer<TAccumulator, TValueA, TValueB = TValueA, TProduct = TAccumulator, TCompletion = TProduct, TCompletionB = TProduct> = 
    (reducer: Reducer<TAccumulator, TValueB>) => 
        Reducer<TAccumulator, TValueA, TProduct> & { completion: Completion<TCompletion, TCompletionB>}


export default Transducer
