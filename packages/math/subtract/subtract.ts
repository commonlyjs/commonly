import curry from "../../function/curry/curry"



/**
 * Subtracts two quantities using the minus operator.
 *
 * @since 1.0.0
 *
 * @param minuend - is a quantity from which another (the subtrahend) is subtracted
 * @param subtrahend - is a quantity which is subtracted from another (the minuend)
 * @returns a difference
 *
 * @example
 * ```
 * import { subtract } from "@commonly/math"
 *
 * subtract(3, 2)  // -> 1
 * ```
 */
const subtract = (minuend: number, subtrahend: number) => {
    return minuend - subtrahend
}



export default curry(subtract) as {
    (minuend: number, subtrahend: number): number
    (minuend: number): (subtrahend: number) => number
}
