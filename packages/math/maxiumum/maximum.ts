/**
 * Finds a maximum in a given list.
 *
 * @since 1.0.0
 *
 * @param xs - is a list in which we will look for a maximum
 * @return a maximum of an xs
 *
 * @example
 * ```
 *  import { maximum } from "@commonly/math"
 *
 *  maximum([ 0, 1, 1, 2, 3, 5, 8 ])    // -> 8
 * ```
 */
const maximum = (xs: number[]): number => {
    return Math.max(...xs)
}



export default maximum
