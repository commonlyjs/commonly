import reduce from "./reduce"



describe(`function reduce(reducer, accumulator, xs)`, () => {
    context(`xs is empty`, () => {
        it(`should return an accumulator`, () => {
            const xs: number[] = []

            expect(reduce((a, b) => a + b, 0, xs))
                .toEqual(0)
        })
    })

    context(`xs is not empty`, () => {
        it(`should return a sum of numbers`, () => {
            const xs: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(reduce((a, b) => a + b, 0, xs))
                .toEqual(88)
        })
    })
})
