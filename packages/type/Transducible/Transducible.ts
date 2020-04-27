import Reducer from "../Reducer/Reducer"
import Transduced from "../Transduced/Transduced"
import Transducer from "../Transducer/Transducer"
import TransducibleArray from "./Adapter/TransducibleArray"



/**
 * [Not documented yet]
 *
 * @since 1.0.0
 */
interface Transducible<TValueA> {
    [Transducible.reducingValue]<T>(): Transduced<Reducer<any, T>>

    [Transducible.reducingSequence]<TValueB>(): Transduced<Reducer<Transducible<TValueB>, TValueB>>

    transduce?<TAccumulator, TValueB = TValueA>(
        transducer: Transducer<TValueA, TValueB>,
        reducer: Transduced<Reducer<TAccumulator, TValueB>>,
        accumulator?: TAccumulator
    ): TAccumulator
}


namespace Transducible {
    export const reducingValue = "@@transducible/reducingValue"
    export const reducingSequence = "@@transducible/reducingSequence"

    export const from = (transducible: unknown) => {
        switch (Object.prototype.toString.call(transducible)) {
            case "[object Array]":
            case "[object String]":
            case "[object Set]":
            case "[object Map]":
            default:
                return new TransducibleArray()
                // throw new Error()
        }
    }
}



export default Transducible