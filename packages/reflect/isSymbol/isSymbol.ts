/**
 * Check if a given value is
 * a {@link https://developer.mozilla.org/en-US/docs/Glossary/symbol | symbol}.
 *
 * @since 1.0.0
 *
 * @param value - is a value to check
 * @returns either true or false whether the value is a symbol or not
 *
 * @example
 * ```
 * import { isSymbol } from "@commonly/reflect"
 *
 * isSymbol(Symbol())      //-> true
 * isSymbol(NaN)           //-> false
 * ```
 */
const isSymbol = (value: unknown | symbol): value is symbol => {
    return typeof value === "symbol"
}



export default isSymbol
