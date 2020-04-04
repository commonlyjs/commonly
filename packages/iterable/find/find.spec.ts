import Matrioshka from "../__fixtures__/Matrioshka"
import find from "./find"



describe("function find(predicate, iterable)", () => {
    context("iterable is an array", () => {
        const predicate = (value: number): boolean => {
            return value > 2
        }

        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return a first found value which is greater than two", () => {
                const expected: number = 3

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        const predicate = (value: string): boolean => {
            return Number(value) > 2
        }

        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "0112358132134"

            it("should return a first found value which is greater than two", () => {
                const expected: string = "3"

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        const predicate = (value: number): boolean => {
            return value > 2
        }

        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a first found value which is greater than two", () => {
                const expected: number = 3

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        const predicate = ([ key, value ]: [ number, number ]): boolean => {
            return (key + value) > 2
        }

        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return a first found value which sum of key and value is greater than two", () => {
                const expected: [ number, number ] = [ 2, 1 ]

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a custom finite iterator-based collection", () => {
        const predicate = (value: number): boolean => {
            return value > 2
        }

        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an undefined", () => {
                const expected: undefined = undefined

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return a first found value which is greater than two", () => {
                const expected: number = 3

                expect(find(predicate, iterable))
                    .toEqual(expected)
                expect(find(predicate)(iterable))
                    .toEqual(expected)
            })
        })
    })
})
