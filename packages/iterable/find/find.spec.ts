import find from "./find"



describe("function find(predicate, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            it("should return an undefined", () => {
                const iterable: (number | string)[] = []
                
                expect(find(x => !!(Number(x) % 2), iterable))
                    .toEqual(undefined)
            })
        })

        context("iterable is not empty", () => {
            const iterable: (number | string)[] = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]

            it("should return a single value", () => {
                expect(find(x => !!(Number(x) % 2) , iterable))
                    .toEqual(1)
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            it("should return an undefined", () => {
                const iterable: string = ""

                expect(find(x => !!(Number(x) % 2), iterable))
                    .toEqual(undefined)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "0112358132134"

            it("should return a single value", () => {
                expect(find(x => !!(Number(x) % 2) , iterable))
                    .toEqual("1")
            })
        })
    })

    context("iterable is a Set", () => {
        context("iterable is empty", () => {
            it("should return an undefined", () => {
                const iterable: Set<number | string> = new Set()

                expect(find(x => !!(Number(x) % 2), iterable))
                    .toEqual(undefined)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number | string> = new Set([ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ])

            it("should return a single value", () => {
                expect(find(x => !!(Number(x) % 2) , iterable))
                    .toEqual(1)
            })
        })
    })
})
