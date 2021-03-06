import Matrioshka from "../__fixtures__/Matrioshka"
import slice from "./slice"



describe("function slice(start, end, iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty iterable", () => {
                const expected: number[] = []

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return a slice of elements starting with the third and ending on the fifth", () => {
                const expected: number[] = [ 1, 2, 3 ]

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty iterable", () => {
                const expected: string = ""

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a slice of elements starting with the third and ending on the fifth", () => {
                const expected: string = "123"

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty iterable", () => {
                const expected: Set<number> = new Set()

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a slice of elements starting with the third and ending on the fifth", () => {
                const expected: Set<number> = new Set([ 2, 3, 5 ])

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty iterable", () => {
                const expected: Map<number, number> = new Map()

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return a slice of elements starting with the third and ending on the fifth", () => {
                const expected: Map<number, number> = new Map([
                    [ 2, 1 ], [ 3, 2 ], [ 4, 3 ]
                ])

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an iterator-based collection", () => {
        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty iterable", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a slice of elements starting with the third and ending on the fifth", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 1, 2, 3 ])

                expect(slice(2, 5, iterable))
                    .toEqual(expected)
                expect(slice(2, 5)(iterable))
                    .toEqual(expected)
                expect(slice(2)(5, iterable))
                    .toEqual(expected)
                expect(slice(2)(5)(iterable))
                    .toEqual(expected)
            })
        })
    })
})
