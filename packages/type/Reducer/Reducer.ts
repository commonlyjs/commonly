import Reduced from "../Reduced/Reduced"



/**
 * The Reducer type represents a function which takes an accumulator and a value and returns an updated accumulator.
 *
 * @since 1.0.0
 */
type Reducer<TAccumulator, TValue> =
    (accumulator: TAccumulator, value: TValue) => TAccumulator | Reduced<TAccumulator>


namespace Reducer {
    export type Completing<TAccumulator, TValue> =
        Reducer<TAccumulator, TValue> & {
            complete: (accumulator: TAccumulator) => TAccumulator
        }
}



export default Reducer
