import Predicate from "../../type/Predicate/Predicate"



/**
 * Negates a given predicate function, thus creating a new negated version of that function.
 *
 * @since 1.0.0
 *
 * @param predicate - is a predicate function to be negated
 * @return a negated version of a predicate function
 *
 * @example
 * ```
 * import { negate } from "@commonly/function"
 *
 * const isUnsealed = negate(Object.isSealed)
 * isUnsealed(window)  // -> true
 * ```
 */
const negate = <TValue>(predicate: Predicate<TValue>): Predicate<TValue> => {
    return (value: TValue): boolean => {
        return !predicate(value)
    }
}



export default negate
