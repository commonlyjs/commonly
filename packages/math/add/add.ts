import curry from '../../function/curry/curry'



/**
 * Combines two quantities using the plus operator.
 *
 * @since 1.0.0
 *
 * @param augend - is the first of two addends
 * @param addend - is the second of two addends
 * @returns a sum
 *
 * @example
 * ```
 * import { add } from "@commonly/math"
 *
 * add(3, 2)   // -> 5
 * ```
 */
const add = (augend: number, addend: number) => {
    return augend + addend
}



export default curry(add) as {
    (augend: number, addend: number): number
    (augend: number): (addend: number) => number
}
