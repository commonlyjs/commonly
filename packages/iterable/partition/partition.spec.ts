import Matrioshka from "../__fixtures__/Matrioshka"
import partition from "./partition"



describe("function partition(n, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty array", () => {
                const expected: number[] = []

                expect(partition(2, iterable))
                    .toEqual(expected)
                expect(partition(2)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return an array partitioned into couples", () => {
                const expected: number[][] = [ [ 0, 1 ], [ 1, 2 ], [ 3, 5 ], [ 8, 13 ] ]

                expect(partition(2, iterable))
                    .toEqual(expected)
                expect(partition(2)(iterable))
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

                expect(partition(2, iterable))
                    .toEqual(expected)
                expect(partition(2)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a string partitioned into couples", () => {
                const expected: string = "011235813"

                expect(partition(2, iterable))
                    .toEqual(expected)
                expect(partition(2)(iterable))
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

            it("should return an empty instance of Set", () => {
                const expected: Set<number> = new Set()

                expect(partition(2, iterable))
                    .toEqual(expected)
                expect(partition(2)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return an instance of Set partitioned into couples", () => {
                const expected: Set<number[]> = new Set([ [ 0, 1 ], [ 2, 3 ], [ 5, 8 ], [ 13 ] ])

                expect(partition(2, iterable))
                    .toEqual(expected)
                expect(partition(2)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty instance of Map", () => {
                const expected: Map<number, number> = new Map()

                expect(partition(2, iterable))
                    .toEqual(expected)
                expect(partition(2)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return an instance of Map partitioned into couples", () => {
                const expected: Map<number[], number[]> = new Map([
                    [ [ 0, 0 ], [ 1, 1 ] ],
                    [ [ 2, 1 ], [ 3, 2 ] ],
                    [ [ 4, 3 ], [ 5, 5 ] ],
                    [ [ 6, 8 ], [ 7, 13 ] ]
                ])

                expect(partition(2, iterable))
                    .toEqual(expected)
                expect(partition(2)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a custom finite iterator-based collection", () => {
        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty custom collection", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(partition(3, iterable))
                    .toEqual(expected)
                expect(partition(3)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a custom collection partitioned into couples", () => {
                const expected: Matrioshka<number[]> = new Matrioshka([ [ 0, 1, 1 ], [ 2, 3, 5 ], [ 8, 13 ] ])

                expect(partition(3, iterable))
                    .toEqual(expected)
                expect(partition(3)(iterable))
                    .toEqual(expected)
            })
        })
    })
})
