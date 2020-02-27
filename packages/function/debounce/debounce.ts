import Function from "../../type/Function/Function"



export type Debounced<TReturnValue, TArguments extends unknown[]> =
    Function.Variadic<TReturnValue, TArguments> & {
        cancel(): void
    }


/**
 * Debounces a given function.
 *
 * @since 1.0.0
 *
 * @param debounced - is a function to be debounced
 * @param wait - is a time in milliseconds to delay the next execution of the debounced function
 * @param options - is an object which further defines the behaviour of the debounced function
 *
 * @example
 * ```
 * import { debounce } from "@commonly/function"
 *
 * document.body.onscroll = debounce(alert, 25)     // -> A prompt will be shown only once for every time scrolling happens
 * ```
 */
const debounce = <TReturnValue, TArguments extends unknown[]>(
    debounced: Function.Variadic<TReturnValue, TArguments>,
    wait = 0,
    options = { maxWait: Infinity }
): Debounced<TReturnValue, TArguments> => {
    const state = {
        token: null as null | NodeJS.Timeout,
        returnValue: null as null | TReturnValue,
    }

    const inner = (...varargs: TArguments): TReturnValue => {
        inner.cancel()

        if (state.returnValue === null) {
            state.returnValue = debounced(...varargs)
            if (options.maxWait !== Infinity) {
                setTimeout(() => {
                    state.returnValue = null
                }, options.maxWait)
            }
        }

        state.token = setTimeout(() => {
            state.token = null
            state.returnValue = null
        }, wait)

        return state.returnValue
    }

    inner.cancel = () => {
        if (state.token) {
            clearTimeout(state.token)
        }
    }

    return inner
}



export default debounce
