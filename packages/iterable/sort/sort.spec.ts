import Matrioshka from "../__fixtures__/Matrioshka"
import sort from "./sort"



describe("function sort(comparator, iterable)", () => {
    context("iterable is an array", () => {
        const comparator = (a: number, b: number): number => {
            return b - a
        }

        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty iterable", () => {
                const expected: number[] = []

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return a sorted iterable", () => {
                const expected: number[] = [ 13, 8, 5, 3, 2, 1, 1, 0 ]

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        const comparator = (a: string, b: string): number => {
            return Number(b) - Number(a)
        }

        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty iterable", () => {
                const expected: string = ""

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a sorted iterable", () => {
                const expected: string = "853321110"

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        const comparator = (a: number, b: number): number => {
            return b - a
        }

        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty iterable", () => {
                const expected: Set<number> = new Set()

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a sorted iterable", () => {
                const expected: Set<number> = new Set([ 13, 8, 5, 3, 2, 1, 1, 0 ])

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        const comparator = ([ ax, ay ]: [ number, number ], [ bx, by ]: [ number, number ]): number => {
            return by - ay
        }

        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty iterable", () => {
                const expected: Map<number, number> = new Map()

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return a sorted iterable", () => {
                const expected: Map<number, number> = new Map([
                    [ 7, 13 ], [ 6, 8 ], [ 5, 5 ], [ 4, 3 ], [ 3, 2 ], [ 2, 1 ], [ 1, 1 ], [ 0, 0 ]
                ])

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an iterator-based collection", () => {
        const comparator = (a: number, b: number): number => {
            return b - a
        }

        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty iterable", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a sorted iterable", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 13, 8, 5, 3, 2, 1, 1, 0 ])

                expect(sort(comparator, iterable))
                    .toEqual(expected)
            })
        })
    })
})
