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
        aliases = [] as string[],
        excluded = [] as FunctionConstructor[]
    } = {}
) => {
    const delegation = (...varargs: TArguments): TReturnValue => {
        const context = contextualize(...varargs) as { [key: string]: Function.Variadic<TReturnValue, unknown[]> }
        if (!excluded.some(constructor => context instanceof constructor)) {
            for (const propertyName of [ f.name, ...aliases] ) {
                const propertyValue = context[propertyName]
                switch (typeof propertyValue) {
                    case "function":
                        return propertyValue.apply(context, varargs)
                    case "undefined":
                        const propertyDescriptor = Object.getOwnPropertyDescriptor(context, propertyName)
                        if (propertyDescriptor) {
                            return propertyDescriptor.value
                        }
                        break;
                    default:
                        return propertyValue;
                }
            }
        }

        return f(...varargs)
    }

    Object.defineProperties(delegation, {
        name: {
            value: f.name,
            configurable: true,
            enumerable: false,
            writable: false
        },
        length: {
            configurable: true,
            enumerable: false,
            writable: false,
            value: f.length
        },
        toString: {
            value: f.toString.bind(f),
            configurable: true,
            enumerable: false,
            writable: true
        }
    })

    return delegation
}


export default delegate
