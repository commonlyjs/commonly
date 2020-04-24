/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
const setting = <TAccumulator extends Map<TValue[0], TValue[1]>, TValue extends [ unknown, unknown ]>(accumulator: TAccumulator, value: TValue): TAccumulator => {
    accumulator.set(value[0], value[1])
    return accumulator
}

setting.initial = <TAccumulator extends Map<unknown, unknown>>(): TAccumulator => {
    return new Map() as TAccumulator
}

setting.complete = <TAccumulator>(accumulator: TAccumulator): TAccumulator => {
    return accumulator
}



export default setting