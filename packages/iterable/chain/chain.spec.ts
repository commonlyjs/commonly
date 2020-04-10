import Matrioshka from "../__fixtures__/Matrioshka"
import chain from "./chain"



describe("function chain(mapper, iterable)", () => {
    context("iterable is an array", () => {
        const mapper = (value: number): [ number, number ] => {
            return [ value, value * value ]
        }

        context("iterable is empty", () => {
            const iterable: number[] = []

            it("should return an empty iterable", () => {
                const expected: number[] = []

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return an iterable where each even-indexed element is raised to the power of two", () => {
                const expected: number[] = [ 0, 0, 1, 1, 1, 1, 2, 4, 3, 9, 5, 25, 8, 64, 13, 169 ]

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        const mapper = (value: string): [ string, number ] => {
            return [ value, Number(value) * Number(value) ]
        }

        context("iterable is empty", () => {
            const iterable: string = ""

            it("should return an empty iterable", () => {
                const expected: string = ""

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: string = "011235813"

            it("should return an iterable where each even-indexed element is raised to the power of two", () => {
                const expected: string = "00111124395258641139"

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Set", () => {
        const mapper = (value: number): [ number, number ] => {
            return [ value, value * value ]
        }

        context("iterable is empty", () => {
            const iterable: Set<number> = new Set()

            it("should return an empty iterable", () => {
                const expected: Set<number> = new Set()

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return an iterable where each even-indexed element is raised to the power of two", () => {
                const expected: Set<number> = new Set([ 0, 0, 1, 1, 1, 1, 2, 4, 3, 9, 5, 25, 8, 64, 13, 169 ])

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an instance of Map", () => {
        const mapper = ([ key, value ]: [ number, number ]): [ number, number ][] => {
            return [ [ key, value ], [ key * key, value * value ] ]
        }

        context("iterable is empty", () => {
            const iterable: Map<number, number> = new Map()

            it("should return an empty iterable", () => {
                const expected: Map<number, number> = new Map()

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Map<number, number> = new Map([
                [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
            ])

            it("should return an iterable where each even-indexed element is raised to the power of two", () => {
                const expected: Map<number, number> = new Map([
                    [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 9, 4 ], [ 4, 3 ],
                    [ 16, 9 ], [ 5, 5 ], [ 25, 25 ], [ 6, 8 ], [ 36, 64 ], [ 7, 13 ], [ 49, 169 ]
                ])

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is an iterator-based collection", () => {
        const mapper = (value: number): [ number, number ] => {
            return [ value, value * value ]
        }

        context("iterable is empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka()

            it("should return an empty iterable", () => {
                const expected: Matrioshka<number> = new Matrioshka()

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])

            it("should return an iterable where each even-indexed element is raised to the power of two", () => {
                const expected: Matrioshka<number> = new Matrioshka([ 0, 0, 1, 1, 1, 1, 2, 4, 3, 9, 5, 25, 8, 64, 13, 169 ])

                expect(chain(mapper, iterable))
                    .toEqual(expected)
                expect(chain(mapper)(iterable))
                    .toEqual(expected)
            })
        })
    })
})
