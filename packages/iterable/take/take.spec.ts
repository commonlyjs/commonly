import take from "./take"



describe("function take(n, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            it("should return an empty array", () => {
                const iterable: number[] = []

                expect(take(4, iterable))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            it("should return an array with four first values", () => {
                const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

                expect(take(4, iterable))
                    .toEqual([ 0, 1, 1, 2 ])
            })
        })
    })
})
