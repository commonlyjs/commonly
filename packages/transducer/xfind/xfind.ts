import reduced from "../../function/reduced/reduced"
import isReduced from "../../reflect/isReduced/isReduced"
import Completion from "../../type/Completion/Completion"
import Predicate from "../../type/Predicate/Predicate"
import Reduced from "../../type/Reduced/Reduced"
import Reducer from "../../type/Reducer/Reducer"
import Transducer from "../../type/Transducer/Transducer"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 * 
 * @param predicate
 * @returns
 */
const xfind = <TAccumulator, TValue>(predicate: Predicate<TValue>): Transducer<TAccumulator, TValue, TValue, TAccumulator | TValue, TValue, TValue | undefined> =>
    (xf: Reducer<TAccumulator, TValue>) => {
        const transducer = (accumulator: TAccumulator, value: TValue) => {
            const product = xf(accumulator, value)
            if (predicate(value)) {
                return reduced(value)
                // return product
            } else {
                // return reduced(value)
                return product
            }
        }

        transducer.completion = (product: TValue) => {
            if (predicate(product)) {
                return product
            } else {
                return undefined
            }
        }
        
        return transducer
    }
    


export default xfind
