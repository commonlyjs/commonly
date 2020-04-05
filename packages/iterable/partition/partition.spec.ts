import Matrioshka from "../__fixtures__/Matrioshka"
import partition from "./partition"



describe("function partition(n, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty array", () => {
                const expected: number[] = []

                expect(partition(3, iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return a partitioned into triplets iterable", () => {
                const expected: number[][] = [ [ 0, 1, 1 ], [ 2, 3, 5 ], [ 8, 13 ] ]

                expect(partition(3, iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        const mapper = (value: string): [ string, number ] => {
            return [ value, Number(value) * Number(value) ]
        }

        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty string", () => {
                const expected: string = ""

                expect(partition(3, iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a partitioned into triplets iterable", () => {
                const expected: string = "0,1,12,3,58,1,3"

                expect(partition(3, iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        const mapper = (value: number): [ number, number ] => {
            return [ value, value * value ]
        }

        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty Set", () => {
                const expected: Set<number> = new Set()

                expect(partition(3, iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a partitioned into triplets iterable", () => {
                const expected: Set<number[]> = new Set([ [ 0, 1, 2 ], [ 3, 5, 8 ], [ 13 ] ])

                expect(partition(3, iterable))
                    .toEqual(expected)
            })
        })
    })

    // context("iterable is an instance of Map", () => {
    //     const mapper = ([ key, value ]: [ number, number ]): [ number, number ][] => {
    //         return [ [ key, value ],  [ key * key, value * value ] ]
    //     }
    //
    //     context("iterable is empty", () => {
    //         const iterable: Map<number, number> = new Map()
    //
    //         it("should return an empty Set", () => {
    //             const expected: Map<number, number> = new Map()
    //
    //             expect(partition(3, iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Map<number, number> = new Map([
    //             [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
    //         ])
    //
    //         it("should return an instance of Map where each even-indexed element is raised to the power of two", () => {
    //             const expected: Map<number, number> = new Map([
    //                 [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
    //             ])
    //
    //             expect(partition(3, iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
})
