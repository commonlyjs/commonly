import Function from "../../type/Function/Function"



/**
 * [Not documented yet]
 *
 * @since 1.0.0
 *
 * @param f
 * @param contextualize
 * @param method
 * @returns
 *
 * @example
 * ```
 *
 * ```
 */
const delegate = <TReturnValue, TArguments extends unknown[]>(
    f: Function.Variadic<TReturnValue, TArguments>,
    contextualize: Function.Variadic<unknown, unknown[]> = (...varargs: unknown[]) => varargs[varargs.length - 1],
    method: string = f.name
) => {
    return (...varargs: TArguments) => {
        const context = contextualize(...varargs) as { [key: string]: Function.Variadic<TReturnValue, unknown[]> }
        if (method in context) {
            varargs.splice(varargs.indexOf(context), 1)
            return context[method](...varargs)
        } else {
            return f(...varargs)
        }
    }
}



export default delegate
