import flatten from "./flatten"
import Matrioshka from "../__fixtures__/Matrioshka"



describe("function flatten(iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: number[][] = []

            it("should return an empty array", () => {
                const expected: number[] = []

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[][] = [ [ 0, 1 ], [ 1, 2 ], [ 3, 5 ], [ 8, 13 ] ]

            it("should return a flattened array", () => {
                const expected: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty string", () => {
                const expected: string = ""

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a flattened array", () => {
                const expected: string = "011235813"

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        context("iterable is empty", () => {
            const iterable: Set<number[]> = new Set()

            it("should return an empty instance of Set", () => {
                const expected: Set<number[]> = new Set()

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number[]> = new Set([ [ 0, 1 ], [ 1, 2 ], [ 3, 5 ], [ 8, 13 ] ])

            it("should return a flattened instance of Set", () => {
                const expected: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        context("iterable is empty", () => {
            const iterable: Set<number[]> = new Set()

            it("should return an empty instance of Map", () => {
                const expected: Set<number[]> = new Set()

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number[], number[]> = new Map([
                [ [ 0, 0 ], [ 1, 1 ] ],
                [ [ 2, 1 ], [ 3, 2 ] ],
                [ [ 4, 3 ], [ 5, 5 ] ],
                [ [ 6, 8 ], [ 7, 13 ] ]
            ])

            it("should return a flattened instance of Map", () => {
                const expected: Map<number, number> = new Map([
                    [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
                ])

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a custom finite iterator-based collection", () => {
        context("iterable is empty", () => {
            const iterable: Matrioshka<number[]> = new Matrioshka()

            it("should return an empty custom collection", () => {
                const expected: Matrioshka<number[]> = new Matrioshka()

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number[]> = new Matrioshka([ [ 0, 1 ], [ 1, 2 ], [ 3, 5 ], [ 8, 13 ] ])

            it("should return a flattened custom collection", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

                expect(flatten(iterable))
                    .toEqual(expected)
            })
        })
    })
})
