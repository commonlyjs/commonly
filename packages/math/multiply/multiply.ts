import curry from "../../function/curry/curry"



/**
 * Multiplies two quantities.
 *
 * @since 1.0.0
 *
 * @param multiplier - is a quantity by which another (the multiplicand) is multiplied
 * @param multiplicand - is a quantity that is multiplied by another (the multiplier)
 * @returns a product
 *
 * @example
 * ```
 * import { multiply } from "@commonly/math"
 *
 * multiply(3, 2)  // -> 6
 * ```
 */
const multiply = (multiplier: number, multiplicand: number): number => {
    return multiplier * multiplicand
}



export default curry(multiply) as {
    (multiplier: number, multiplicand: number): number
    (multiplier: number): (multiplicand: number) => number
}

