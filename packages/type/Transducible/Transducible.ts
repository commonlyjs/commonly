import Reducer from "../Reducer/Reducer"
import Transduced from "../Transduced/Transduced"
import Transducer from "../Transducer/Transducer"



interface Transducible<TValue> {
    transduce?<TAccumulator, TValue>(transducer: Transducer<TValue>): TAccumulator
    reducer<TAccumulator>(): Transduced<Reducer<TAccumulator, TValue>>
}



export default Transducible