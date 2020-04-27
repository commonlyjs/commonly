import Matrioshka from "../__fixtures__/Matrioshka"
import drop from "./drop"



describe("function drop(n, iterable)", () => {
    test("", () => expect(true).toBe(true))

    // context("iterable is an array", () => {
    //     context("iterable is empty", () => {
    //         const iterable: number[] = []
    //
    //         it("should return an empty iterable", () => {
    //             const expected: number[] = []
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]
    //
    //         it("should return a slice of iterable containing only the last three elements", () => {
    //             const expected: number[] = [ 5, 8, 13 ]
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })

    // context("iterable is a string", () => {
    //     context("iterable is empty", () => {
    //         const iterable: string = ""
    //
    //         it("should return an empty iterable", () => {
    //             const expected: string = ""
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: string = "011235813"
    //
    //         it("should return a slice of iterable containing only the last three elements", () => {
    //             const expected: string = "5813"
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an instance of Set", () => {
    //     context("iterable is empty", () => {
    //         const iterable: Set<number> = new Set()
    //
    //         it("should return an empty iterable", () => {
    //             const expected: Set<number> = new Set()
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])
    //
    //         it("should return a slice of iterable containing only the last two elements", () => {
    //             const expected: Set<number> = new Set([ 8, 13 ])
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an instance of Map", () => {
    //     context("iterable is empty", () => {
    //         const iterable: Map<number, number> = new Map()
    //
    //         it("should return an empty iterable", () => {
    //             const expected: Map<number, number> = new Map()
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Map<number, number> = new Map([
    //             [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
    //         ])
    //
    //         it("should return a slice of iterable containing only the last three elements", () => {
    //             const expected: Map<number, number> = new Map([
    //                 [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
    //             ])
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an iterator-based collection", () => {
    //     context("iterable is empty", () => {
    //         const iterable: Matrioshka<number> = new Matrioshka()
    //
    //         it("should return an empty iterable", () => {
    //             const expected: Matrioshka<number> = new Matrioshka()
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])
    //
    //         it("should return a slice of iterable containing only the last three elements", () => {
    //             const expected: Matrioshka<number> = new Matrioshka([ 5, 8, 13 ])
    //
    //             expect(drop(5, iterable))
    //                 .toEqual(expected)
    //             expect(drop(5)(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
})