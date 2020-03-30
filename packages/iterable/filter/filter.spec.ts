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

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty string", () => {
                expect(filter(x => !!(Number(x) % 2), iterable))
                    .toEqual("")
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "0112358132134"

            it("should return a string containing only odd values", () => {
                expect(filter(x => !!(Number(x) % 2), iterable))
                    .toEqual("11351313")
            })
        })
    })

    context("iterable is a Set", () => {
        context("iterable is empty", () => {
            const iterable: Set<void> = new Set()

            it("should return an empty Set", () => {
                expect(filter(x => !!(Number(x) % 2), iterable))
                    .toEqual(new Set())
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number | string> = new Set([ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ])

            it("should return a Set containing only odd values", () => {
                expect(filter(x => !!(Number(x) % 2), iterable))
                    .toEqual(new Set([ 1, "1", "3", 5, 13, "21" ]))
            })
        })
    })
})
