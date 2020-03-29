/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
const array = <TAccumulator extends TValue[], TValue>(accumulator: TAccumulator, value: TValue): TAccumulator => {
    accumulator.push(value)
    return accumulator
}

array.initialize = <TAccumulator>(): TAccumulator => {
    return [] as unknown as TAccumulator
}

array.complete = <TAccumulator>(accumulator: TAccumulator): TAccumulator => {
    return accumulator
}



export default array