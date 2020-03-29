import filter from "./filter"



describe("function filter(predicate, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: (number | string)[] = []

            it("should return an empty array", () => {
                expect(filter(x => !!(Number(x) % 2), iterable))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            const iterable: (number | string)[] = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]

            it("should return an array containing only odd values", () => {
                expect(filter(x => !!(Number(x) % 2), iterable))
                    .toEqual([ 1, "1", "3", 5, 13, "21" ])
            })
        })
    })
})
