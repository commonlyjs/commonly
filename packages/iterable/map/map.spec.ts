import map from "./map"



describe("function map(mapper, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: (number | string)[] = []

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

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty string", () => {
                expect(map(String, iterable))
                    .toEqual("")
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "0112358132134"

            it("should return a mapped string", () => {
                expect(map(String, iterable))
                    .toEqual("0112358132134")
            })
        })
    })

    context("iterable is a Set", () => {
        context("iterable is empty", () => {
            const iterable: Set<number | string> = new Set()

            it("should return an empty Set", () => {
                expect(map(String, iterable))
                    .toEqual(new Set())
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number | string> = new Set([ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ])

            it("should return a mapped Set", () => {
                expect(map(String, iterable))
                    .toEqual(new Set([ "0", "1", "1", "2", "3", "5", "8", "13", "21", "34" ]))
            })
        })
    })
})
