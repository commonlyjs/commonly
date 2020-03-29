/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
const string = <TAccumulator extends string[], TValue extends string>(accumulator: TAccumulator, value: TValue): TAccumulator => {
    accumulator.push(value)
    return accumulator
}

string.initialize = <TAccumulator extends string[]>(): TAccumulator => {
    return [] as unknown as TAccumulator
}

string.complete = <TAccumulator extends string[]>(accumulator: TAccumulator): string => {
    return accumulator.join("")
}



export default string