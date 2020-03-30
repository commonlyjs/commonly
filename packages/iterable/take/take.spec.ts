import take from "./take"



describe("function take(n, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            it("should return an empty array", () => {
                const iterable: (number | string)[] = []

                expect(take(4, iterable))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            it("should return an array with four first values", () => {
                const iterable: (number | string)[] = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]

                expect(take(4, iterable))
                    .toEqual([ "0", 1, "1", 2 ])
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            it("should return an empty string", () => {
                const iterable: string = ""

                expect(take(4, iterable))
                    .toEqual("")
            })
        })

        context("iterable is not empty", () => {
            it("should return a string with four first values", () => {
                const iterable: string = "0112358132134"

                expect(take(4, iterable))
                    .toEqual("0112")
            })
        })
    })

    context("iterable is a Set", () => {
        context("iterable is empty", () => {
            it("should return an empty Set", () => {
                const iterable: Set<number | string> = new Set()

                expect(take(4, iterable))
                    .toEqual(new Set())
            })
        })

        context("iterable is not empty", () => {
            it("should return a Set with four first values", () => {
                const iterable: Set<number | string> = new Set([ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ])

                expect(take(4, iterable))
                    .toEqual(new Set([ "0", 1, "1", 2 ]))
            })
        })
    })
})
