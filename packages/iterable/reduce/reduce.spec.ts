import reduce from "./reduce"



describe("function reduce(reducing, accumulator, iterable)", () => {
    context("iterable is empty", () => {
        it("should return an accumulator", () => {
            const iterable: number[] = []

            expect(reduce((a, b) => a + b, 0, iterable))
                .toEqual(0)
        })
    })

    context("iterable is not empty", () => {
        it("should return a sum of numbers", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

            expect(reduce((a, b) => a + b, 0, iterable))
                .toEqual(88)
        })
    })
})
