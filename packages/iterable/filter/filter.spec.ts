import Matrioshka from "../__fixtures__/Matrioshka"
import filter from "./filter"



describe("function filter(predicate, iterable)", () => {
    context("iterable is an array", () => {
        const predicate = (value: number): boolean => {
            return Boolean(value % 2)
        }

        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty array", () => {
                const expected: number[] = []

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return an array containing only odd elements", () => {
                const expected: number[] = [ 1, 1,3, 5, 13 ]

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        const predicate = (value: string): boolean => {
            return Boolean(Number(value) % 2)
        }

        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty string", () => {
                const expected: string = ""

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a string containing only odd elements", () => {
                const expected: string = "113513"

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        const predicate = (value: number): boolean => {
            return Boolean(value % 2)
        }

        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty instance of Set", () => {
                const expected: Set<number> = new Set()

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return an instance of Set containing only odd elements", () => {
                const expected: Set<number> = new Set([ 1, 3, 5, 13 ])

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        const predicate = ([ key, value ]: [ number, number ]): boolean => {
            return Boolean((key + value) % 2)
        }

        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty instance of Map", () => {
                const expected: Map<number, number> = new Map()

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return an instance of Map containing only elements of which sum of key and value is odd", () => {
                const expected: Map<number, number> = new Map([
                    [ 2, 1 ], [ 3, 2 ], [ 4, 3 ]
                ])

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a custom finite iterator-based collection", () => {
        const predicate = (value: number): boolean => {
            return Boolean(value % 2)
        }

        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty custom collection", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a custom collection containing only odd elements", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 1, 1, 3, 5, 13 ])

                expect(filter(predicate, iterable))
                    .toEqual(expected)
                expect(filter(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })
})
