import Matrioshka from "../__fixtures__/Matrioshka"
import distinct from "./distinct"



describe("function distinct(iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty array", () => {
                const expected: number[] = []

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return an iterable without any duplicates", () => {
                const expected: number[] = [ 0, 1, 2, 3, 5, 8, 13 ]

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty string", () => {
                const expected: string = ""

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return an iterable without any duplicates", () => {
                const expected: string = "012358"

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty instance of Set", () => {
                const expected: Set<number> = new Set()

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return an iterable without any duplicates", () => {
                const expected: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty instance of Map", () => {
                const expected: Map<number, number> = new Map()

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return an iterable without any duplicates", () => {
                const expected: Map<number, number> = new Map([
                    [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
                ])

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a custom finite iterator-based collection", () => {
        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty custom collection", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return an iterable without any duplicates", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 0, 1, 2, 3, 5, 8, 13 ])

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })
    })
})
