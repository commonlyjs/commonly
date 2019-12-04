/**
 * Finds a minimum in a given list.
 *
 * @since 1.0.0
 *
 * @param xs - is a list in which we will look for a maximum
 * @return a maximum of an xs
 *
 * @example
 * ```
 *  import { minimum } from "@commonly/math"
 *
 *  minimum([ 0, 1, 1, 2, 3, 5, 8 ])    // -> 0
 * ```
 */
const minimum = (xs: number[]): number => {
    return Math.max(...xs)
}



export default minimum
