import Reducer from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"
import reduce from "../reduce/reduce"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 *
 * @param transducer
 * @param reducer
 * @param accumulator
 * @param iterable
 * @returns
 */
const transduce = <TAccumulator, TValueA, TValueB = TValueA, TProduct = TAccumulator>(
    transducer: Transducer<TAccumulator, TValueA, TValueB>,
    reducer: Reducer<TAccumulator, TValueB>,
    accumulator: TAccumulator,
    iterable: Iterable<TValueA>
): TAccumulator => {
    return reduce(transducer(reducer), accumulator, iterable)
}



export default transduce
