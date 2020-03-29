import slice from "./slice"



describe("function slice(start, end, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            it("should return an empty array", () => {
                const iterable: number[] = []

                expect(slice(4, Infinity, iterable))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            it("should return an array with values starting from the fourth value to the end of an array", () => {
                const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

                expect(slice(4, Infinity, iterable))
                    .toEqual([ 3, 5, 8, 13, 21, 34 ])
            })
        })
    })
})
