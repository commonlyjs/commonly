/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
const joining = <TAccumulator extends string[], TValue extends string>(accumulator: TAccumulator, value: TValue): TAccumulator => {
    accumulator.push(value)
    return accumulator
}

joining.initialize = <TAccumulator extends string[]>(): TAccumulator => {
    return [] as unknown as TAccumulator
}

joining.complete = <TAccumulator extends string[]>(accumulator: TAccumulator): TAccumulator => {
    // @ts-ignore
    return accumulator
        .map(string =>
            Array.isArray(string) ?
                string.join("") : string
        )
        .join("")
}



export default joining