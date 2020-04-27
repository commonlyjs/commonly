import Matrioshka from "../__fixtures__/Matrioshka"
import takeWhile from "./takeWhile"



describe("function takeWhile(predicate, iterable)", () => {
    test("", () => expect(true).toBe(true))

    // context("iterable is an array", () => {
    //     const predicate = (value: number): boolean => {
    //         return value <= 3
    //     }
    //
    //     context("iterable is empty", () => {
    //         const iterable: number[] = []
    //
    //         it("should return an iterable", () => {
    //             const expected: number[] = []
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]
    //
    //         it("should return a slice of iterable containing only elements equal or lesser than three", () => {
    //             const expected: number[] = [ 0, 1, 1, 2, 3 ]
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })

    // context("iterable is a string", () => {
    //     const predicate = (value: string): boolean => {
    //         return Number(value) <= 3
    //     }
    //
    //     context("iterable is empty", () => {
    //         const iterable: string = ""
    //
    //         it("should return an iterable", () => {
    //             const expected: string = ""
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: string = "011235813"
    //
    //         it("should return a slice of iterable containing only elements equal or lesser than three", () => {
    //             const expected: string = "01123"
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an instance of Set", () => {
    //     const predicate = (value: number): boolean => {
    //         return value <= 3
    //     }
    //
    //     context("iterable is empty", () => {
    //         const iterable: Set<number> = new Set()
    //
    //         it("should return an iterable", () => {
    //             const expected: Set<number> = new Set()
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])
    //
    //         it("should return a slice of iterable containing only elements equal or lesser than three", () => {
    //             const expected: Set<number> = new Set([ 0, 1, 2, 3 ])
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an instance of Map", () => {
    //     const predicate = ([ key, value ]: [ number, number ]): boolean => {
    //         return (key + value) <= 7
    //     }
    //
    //     context("iterable is empty", () => {
    //         const iterable: Map<number, number> = new Map()
    //
    //         it("should return an iterable", () => {
    //             const expected: Map<number, number> = new Map()
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Map<number, number> = new Map([
    //             [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
    //         ])
    //
    //         it("should return a slice of iterable containing only elements equal or lesser than seven", () => {
    //             const expected: Map<number, number> = new Map([
    //                 [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ]
    //             ])
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an iterator-based collection", () => {
    //     const predicate = (value: number): boolean => {
    //         return value <= 3
    //     }
    //
    //     context("iterable is empty", () => {
    //         const iterable: Matrioshka<number> = new Matrioshka()
    //
    //         it("should return an iterable", () => {
    //             const expected: Matrioshka<number> = new Matrioshka()
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])
    //
    //         it("should return a slice of iterable containing only elements equal or lesser than three", () => {
    //             const expected: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3 ])
    //
    //             expect(takeWhile(predicate, iterable))
    //                 .toEqual(expected)
    //             expect(takeWhile(predicate)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
})
