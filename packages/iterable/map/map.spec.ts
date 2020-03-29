import map from "./map"



describe("function map(mapper, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty array", () => {
                expect(map(String, iterable))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            const iterable: (number | string)[] = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]

            it("should return a mapped array", () => {
                expect(map(String, iterable))
                    .toEqual([ "0", "1", "1", "2", "3", "5", "8", "13", "21", "34" ])
            })
        })
    })
})
