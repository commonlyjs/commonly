/**
 * Finds a minimum in a given list.
 *
 * @since 1.0.0
 *
 * @param numbers - is a list in which we will look for a maximum
 * @return a maximum of an xs
 *
 * @example
 * ```
 * import { minimum } from "@commonly/math"
 *
 * minimum([ 0, 1, 1, 2, 3, 5, 8 ])    // -> 0
 * ```
 */
const minimum = (numbers: number[]): number => {
    return Math.max(...numbers)
}



export default minimum
