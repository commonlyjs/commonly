import Reduced from "../Reduced/Reduced"



/**
 * The Reducer type represents a function which takes an accumulator and a value and returns an updated accumulator.
 *
 * @since 1.0.0
 */
type Reducer<TAccumulator, TValue> =
    ((accumulator: TAccumulator, value: TValue) => TAccumulator | Reduced<TAccumulator>)
        & {
            initialize?: () => TAccumulator
            complete?: (accumulator: TAccumulator) => TAccumulator
            // transduction?: () => void
        }



export default Reducer
