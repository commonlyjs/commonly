import Function from "../../type/Function/Function"
import debounce from "../debounce/debounce"



export type Throttled<TReturnValue, TArguments extends unknown[]> =
    Function.Variadic<TReturnValue, TArguments> & {
        cancel(): void
    }

/**
 * Throttles a function meaning it will be executed only once per `wait` time.
 *
 * @since 1.0.0
 *
 * @param throttled - is a function to be throttled
 * @param wait - is a time in milliseconds to delay the next execution of the throttled function
 * @returns a throttled function
 *
 * @example
 * ```
 * import { throttle } from "@commonly/function"
 *
 * document.body.onscroll = throttle(alert, 1250)     // -> A prompt will be shown once every 1250 milliseconds while scrolling
 * ```
 */
const throttle = <TReturnValue, TArguments extends unknown[]>(
    throttled: Function.Variadic<TReturnValue, TArguments>,
    wait: number = 0
): Throttled<TReturnValue, TArguments> => {
    return debounce(throttled, wait, { maxWait: wait })
}



export default throttle
