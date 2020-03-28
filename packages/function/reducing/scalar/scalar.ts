const scalar = <TAccumulator, TValue extends TAccumulator>(accumulator: TAccumulator, value: TValue): TValue => {
    return value
}

scalar.initialize = <TAccumulator extends undefined>(): TAccumulator => {
    return undefined as TAccumulator
}

scalar.complete = <TAccumulator>(accumulator: TAccumulator) => {
    return accumulator
}



export default scalar