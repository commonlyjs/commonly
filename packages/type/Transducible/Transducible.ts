import Reducer from "../Reducer/Reducer"
import Transduced from "../Transduced/Transduced"
import Transducer from "../Transducer/Transducer"



/**
 * [Not documented yet]
 *
 * @since 1.0.0
 */
interface Transducible<TValueA, TBoxedValueA> {
    transduce<TAccumulator, TValueB = TValueA>(
        transducer: Transducer<TValueA, TValueB>,
        reducer: Transduced<Reducer<TAccumulator, TValueB>>,
        accumulator?: TAccumulator
    ): TAccumulator
    [Transducible.reducingValue](): Transduced<Reducer<TBoxedValueA, TValueA>>
    [Transducible.reducingSequence]<TValueB, TBoxedValueB>(): Transduced<Reducer<Transducible<TValueB, TBoxedValueB>, TValueB>>
}


namespace Transducible {
    export const reducingValue = "@@transducible/reducingValue"
    export const reducingSequence = "@@transducible/reducingSequence"
}



export default Transducible