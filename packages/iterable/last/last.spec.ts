import Matrioshka from "../__fixtures__/Matrioshka"
import last from "./last"



describe("function last(iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(last(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return a last element", () => {
                const expected: number = 13

                expect(last(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(last(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a last element", () => {
                const expected: string = "3"

                expect(last(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(last(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a last element", () => {
                const expected: number = 13

                expect(last(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(last(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return a last element", () => {
                const expected: [ number, number ] = [ 7, 13 ]

                expect(last(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a custom finite iterator-based collection", () => {
        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(last(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a last element", () => {
                const expected: number = 13

                expect(last(iterable))
                    .toEqual(expected)
            })
        })
    })
})
