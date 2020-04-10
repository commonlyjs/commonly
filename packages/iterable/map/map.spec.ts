import Matrioshka from "../__fixtures__/Matrioshka"
import map from "./map"



describe("function map(mapper, iterable)", () => {
    context("iterable is an array", () => {
        const mapper = (value: number): number => {
            return value * value
        }

        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty iterable", () => {
                const expected: number[] = []

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return an iterable where each element is raised to the power of two", () => {
                const expected: number[] = [ 0, 1, 1, 4, 9, 25, 64, 169 ]

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        const mapper = (value: string): number => {
            return Number(value) * Number(value)
        }

        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty iterable", () => {
                const expected: string = ""

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return an iterable where each element is raised to the power of two", () => {
                const expected: string = "01149256419"

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        const mapper = (value: number): number => {
            return value * value
        }

        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty iterable", () => {
                const expected: Set<number> = new Set()

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return an instance of Set where each element is raised to the power of two", () => {
                const expected: Set<number> = new Set([ 0, 1, 1, 4, 9, 25, 64, 169 ])

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        const mapper = ([ key, value ]: [ number, number ]): [ number, number ] => {
            return [ key * key, value * value ]
        }

        context("should return an empty iterable", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty iterable", () => {
                const expected: Map<number, number> = new Map()

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return an iterable where each element is raised to the power of two", () => {
                const expected: Map<number, number> = new Map([
                    [ 0, 0 ], [ 1, 1 ], [ 4, 1 ], [ 9, 4 ], [ 16, 9 ], [ 25, 25 ], [ 36, 64 ], [ 49, 169 ]
                ])

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a custom finite iterator-based collection", () => {
        const mapper = (value: number): number => {
            return value * value
        }

        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty iterable", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return an iterable where each element is raised to the power of two", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 4, 9, 25, 64, 169 ])

                expect(map(mapper, iterable))
                    .toEqual(expected)
                expect(map(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })
})
