/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
const scalar = <TAccumulator, TValue extends TAccumulator>(accumulator: TAccumulator, value: TValue): TValue => {
    return value
}

scalar.initial = <TAccumulator extends undefined>(): TAccumulator => {
    return undefined as TAccumulator
}

scalar.complete = <TAccumulator>(accumulator: TAccumulator) => {
    return accumulator
}



export default scalar