import Matrioshka from "../__fixtures__/Matrioshka"
import reverse from "./reverse"



describe("function reverse(iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty iterable", () => {
                const expected: number[] = []

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return a reversed iterable", () => {
                const expected: number[] = [ 13, 8, 5, 3, 2, 1, 1, 0 ]

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty iterable", () => {
                const expected: string = ""

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a reversed iterable", () => {
                const expected: string = "318532110"

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty iterable", () => {
                const expected: Set<number> = new Set()

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a reversed iterable", () => {
                const expected: Set<number> = new Set([ 13, 8, 5, 3, 2, 1, 1, 0 ])

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty iterable", () => {
                const expected: Map<number, number> = new Map()

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return a reversed iterable", () => {
                const expected: Map<number, number> = new Map([
                    [ 7, 13 ], [ 6, 8 ], [ 5, 5 ], [ 4, 3 ], [ 3, 2 ], [ 2, 1 ], [ 1, 1 ], [ 0, 0 ]
                ])

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an iterator-based collection", () => {
        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty iterable", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a reversed iterable", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 13, 8, 5, 3, 2, 1, 1, 0 ])

                expect(reverse(iterable))
                    .toEqual(expected)
            })
        })
    })
})
