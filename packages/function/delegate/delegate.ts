import Function from "../../type/Function/Function"



/**
 * [Not documented yet]
 *
 * @since 1.0.0
 *
 * @param f
 * @param options
 * @returns
 *
 * @example
 * ```
 * import { delegate } from "@commonly/function"
 * ```
 */
const delegate = <TReturnValue, TArguments extends unknown[]>(
    f: Function.Variadic<TReturnValue, TArguments>,
    {
        contextualize = (...varargs: unknown[]) => varargs[varargs.length - 1],
        excluded = [] as unknown[]
    } = {}
) => {
    return (...varargs: TArguments) => {
        const context = contextualize(...varargs) as { [key: string]: Function.Variadic<TReturnValue, unknown[]> }
        if (f.name in context && !excluded.includes(context.constructor)) {
            varargs.splice(varargs.indexOf(context), 1)
            return context[f.name](...varargs)
        } else {
            return f(...varargs)
        }
    }
}



export default delegate
