/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
const pushing = <TAccumulator extends TValue[], TValue>(accumulator: TAccumulator, value: TValue): TAccumulator => {
    accumulator.push(value)
    return accumulator
}

pushing.initialize = <TAccumulator>(): TAccumulator => {
    return [] as unknown as TAccumulator
}

pushing.complete = <TAccumulator>(accumulator: TAccumulator): TAccumulator => {
    return accumulator
}



export default pushing