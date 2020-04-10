import Matrioshka from "../__fixtures__/Matrioshka"
import dropWhile from "./dropWhile"



describe("function dropWhile(predicate, iterable)", () => {
    context("iterable is an array", () => {
        const predicate = (value: number): boolean => {
            return value <= 3
        }

        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty iterable", () => {
                const expected: number[] = []

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return a slice of iterable containing only the last three elements", () => {
                const expected: number[] = [ 5, 8, 13 ]

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        const predicate = (value: string): boolean => {
            return Number(value) <= 3
        }

        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty iterable", () => {
                const expected: string = ""

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return a slice of iterable containing only the last four elements", () => {
                const expected: string = "5813"

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        const predicate = (value: number): boolean => {
            return value <= 3
        }

        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty iterable", () => {
                const expected: Set<number> = new Set()

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a slice of iterable containing only the last three elements", () => {
                const expected: Set<number> = new Set([ 5, 8, 13 ])

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        const predicate = ([ key, value ]: [ number, number ]): boolean => {
            return (key + value) <= 7
        }

        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty iterable", () => {
                const expected: Map<number, number> = new Map()

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return a slice of iterable containing only the last three elements", () => {
                const expected: Map<number, number> = new Map([
                    [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
                ])

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an iterator-based collection", () => {
        const predicate = (value: number): boolean => {
            return value <= 3
        }

        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty iterable", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a slice of iterable containing only the last three elements", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 5, 8, 13 ])

                expect(dropWhile(predicate, iterable))
                    .toEqual(expected)
                expect(dropWhile(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })
})