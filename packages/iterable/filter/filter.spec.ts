import filter from "./filter"



describe("function map(mapper, iterable)", () => {
    const predicate = (x: number) => !!(x % 2)
    
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            it("should return an empty array", () => {
                const iterable: number[] = []
                
                expect(filter(predicate, iterable))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            it("should return a mapped array", () => {
                const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

                expect(filter(predicate, iterable))
                    .toEqual([ 1, 1, 3, 5, 13, 21 ])
            })
        })
    })
})
