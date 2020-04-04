import every from "./every"
import Matrioshka from "../__fixtures__/Matrioshka"



describe("function every(predicate, iterable)", () => {
    context("iterable is an array", () => {
        const predicate = (value: number): boolean => {
            return Boolean(value % 2)
        }

        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return true", () => {
                const expected: boolean = true

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return false", () => {
                const expected: boolean = false

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
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

            it("should return true", () => {
                const expected: boolean = true

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return false", () => {
                const expected: boolean = false

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
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

            it("should return true", () => {
                const expected: boolean = true

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return false", () => {
                const expected: boolean = false

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
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

            it("should return true", () => {
                const expected: boolean = true

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return false", () => {
                const expected: boolean = false

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
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

            it("should return true", () => {
                const expected: boolean = true

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return false", () => {
                const expected: boolean = false

                expect(every(predicate, iterable))
                    .toEqual(expected)
                expect(every(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })
})
