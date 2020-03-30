import slice from "./slice"



describe("function slice(start, end, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            it("should return an empty array", () => {
                const iterable: (number | string)[] = []

                expect(slice(4, Infinity, iterable))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            it("should return an array with values starting from the fourth value to the end of an array", () => {
                const iterable: (number | string)[] = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]

                expect(slice(4, Infinity, iterable))
                    .toEqual([ "3", 5, "8", 13, "21", 34 ])
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            it("should return an empty string", () => {
                const iterable: string = ""

                expect(slice(4, Infinity, iterable))
                    .toEqual("")
            })
        })

        context("iterable is not empty", () => {
            it("should return a string with values starting from the fourth value to the end of a string", () => {
                const iterable: string = "0112358132134"

                expect(slice(4, Infinity, iterable))
                    .toEqual("358132134")
            })
        })
    })

    context("iterable is a Set", () => {
        context("iterable is empty", () => {
            it("should return an empty Set", () => {
                const iterable: Set<number | string> = new Set()

                expect(slice(4, Infinity, iterable))
                    .toEqual(new Set())
            })
        })

        context("iterable is not empty", () => {
            it("should return a Set with values starting from the fourth value to the end of a Set", () => {
                const iterable: Set<number | string> = new Set([ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ])

                expect(slice(4, Infinity, iterable))
                    .toEqual(new Set([ "3", 5, "8", 13, "21", 34 ]))
            })
        })
    })
})
