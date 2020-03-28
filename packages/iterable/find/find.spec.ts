import find from "./find"



describe("function find(predicate, iterable)", () => {
    const predicate = (x: number) => !!(x % 2)
    
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            it("should return an undefined", () => {
                const iterable: number[] = []
                
                expect(find(predicate, iterable))
                    .toEqual(undefined)
            })
        })

        context("iterable is not empty", () => {
            it("should return a single value", () => {
                const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

                expect(find(predicate, iterable))
                    .toEqual(1)
            })
        })
    })
})
