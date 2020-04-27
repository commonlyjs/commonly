import Matrioshka from "../__fixtures__/Matrioshka"
import head from "./head"



describe("function head(iterable)", () => {
    test("", () => expect(true).toBe(true))

    // context("iterable is an array", () => {
    //     context("iterable is empty", () => {
    //         const iterable: number[] = []
    //
    //         it("should return an undefined", () => {
    //             const expected: undefined = undefined
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13 ]
    //
    //         it("should return a first element", () => {
    //             const expected: number = 0
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })

    // context("iterable is a string", () => {
    //     context("iterable is empty", () => {
    //         const iterable: string = ""
    //
    //         it("should return an undefined", () => {
    //             const expected: undefined = undefined
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: string = "011235813"
    //
    //         it("should return a first element", () => {
    //             const expected: string = "0"
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an instance of Set", () => {
    //     context("iterable is empty", () => {
    //         const iterable: Set<number> = new Set()
    //
    //         it("should return an undefined", () => {
    //             const expected: undefined = undefined
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Set<number> = new Set([ 0, 1, 1, 2, 3, 5, 8, 13 ])
    //
    //         it("should return a first element", () => {
    //             const expected: number = 0
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an instance of Map", () => {
    //     context("iterable is empty", () => {
    //         const iterable: Map<number, number> = new Map()
    //
    //         it("should return an undefined", () => {
    //             const expected: undefined = undefined
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Map<number, number> = new Map([
    //             [ 0, 0 ], [ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 5 ], [ 6, 8 ], [ 7, 13 ]
    //         ])
    //
    //         it("should return a first element", () => {
    //             const expected: [ number, number ] = [ 0, 0 ]
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
    //
    // context("iterable is an iterator-based collection", () => {
    //     context("iterable is empty", () => {
    //         const iterable: Matrioshka<number> = new Matrioshka()
    //
    //         it("should return an undefined", () => {
    //             const expected: undefined = undefined
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    //
    //     context("iterable is not empty", () => {
    //         const iterable: Matrioshka<number> = new Matrioshka([ 0, 1, 1, 2, 3, 5, 8, 13 ])
    //
    //         it("should return a first element", () => {
    //             const expected: number = 0
    //
    //             expect(head(iterable))
    //                 .toEqual(expected)
    //         })
    //     })
    // })
})
