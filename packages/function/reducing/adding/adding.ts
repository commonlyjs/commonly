/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
const adding = <TAccumulator extends Set<TValue>, TValue>(accumulator: TAccumulator, value: TValue): TAccumulator => {
    accumulator.add(value)
    return accumulator
}

adding.initial = <TAccumulator extends Set<unknown>>(): TAccumulator => {
    return new Set() as TAccumulator
}

adding.complete = <TAccumulator>(accumulator: TAccumulator): TAccumulator => {
    return accumulator
}



export default adding