import map from "./map"



describe("function map(mapper, iterable)", () => {
    const mapper = (x: number) => x * x
    
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            it("should return an empty array", () => {
                const iterable: number[] = []
                
                expect(map(mapper, iterable))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            it("should return a mapped array", () => {
                const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

                expect(map(mapper, iterable))
                    .toEqual([ 0, 1, 1, 4, 9, 25, 64, 169, 441, 1156 ])
            })
        })
    })
})
