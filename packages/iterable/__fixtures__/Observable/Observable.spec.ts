import joining from "../../../function/reducing/joining/joining"
import reducing from "../../../function/reducing/reducing"
import xmap from "../../../transducer/xmap/xmap"
import Observable from "./Observable"



describe("class Observable()", () => {
    // test("", (done) => {
    //     const observable = Observable.of(0, 1, 1, 2, 3, 5, 8, 13)
    //
    //     const expected = [ 0, 1, 1, 2, 3, 5, 8, 13 ]
    //
    //     observable.subscribe({
    //         next: (value) => {
    //             expect(expected)
    //                 .toContain(value)
    //         },
    //         complete: () => {
    //
    //             done()
    //         }
    //     })
    // })
    //
    // test("", () => {
    //     const observable = Observable.of(0, 1, 1, 2, 3, 5, 8, 13)
    //
    //     const output = observable.transduce(
    //         xmap<number>(value => value * value),
    //         reducing.pushing
    //     )
    //
    //     const expected = [ 0, 1, 1, 4, 9, 25, 64, 169 ]
    //     expect(output)
    //         .toEqual(expected)
    // })
    //
    // test("", () => {
    //     const observable = Observable.of(0, 1, 1, 2, 3, 5, 8, 13)
    //
    //     const output = observable.transduce(
    //         xmap<number, string>(value => String(value * value)),
    //         reducing.joining
    //     )
    //
    //     const expected = "011492564169"
    //     expect(output)
    //         .toEqual(expected)
    // })

    test("", (done) => {
        const observable = Observable.of(0, 1, 1, 2, 3, 5, 8, 13)

        const output = observable.transduce(
            xmap<number>(value => value * value),
        )

        const expected = [ 0, 1, 1, 4, 9, 25, 64, 169 ]

        output.subscribe({
            next: (value) => {
                expect(expected)
                    .toContain(value)
            },
            complete: () => {
                done()
            }
        })
    })
})