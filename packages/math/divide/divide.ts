import curry from "../../function/curry/curry"



/**
 * Divides two quantities.
 *
 * @since 1.0.0
 *
 * @param dividend - is a quantity that is divided by another quantity
 * @param divisor - is a quantity which divides a dividend
 * @returns a quotient
 *
 * @example
 * ```
 * import { divide } from "@commonly/math"
 *
 * divide(3, 2)    // -> 1.5
 * ```
 */
const divide = (dividend: number, divisor: number) => {
    return dividend / divisor
}



export default curry(divide) as {
    (dividend: number, divisor: number): number
    (dividend: number): (divisor: number) => number
}



