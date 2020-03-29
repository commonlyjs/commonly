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
})
