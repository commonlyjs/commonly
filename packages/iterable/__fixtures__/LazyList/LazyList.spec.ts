import reducing from "../../../function/reducing/reducing"
import xmap from "../../../transducer/xmap/xmap"
import LazyList from "./LazyList"



describe("class LazyList", () => {
    test("", () => {
        const list = LazyList.of(0, 1, 1, 2, 3, 5, 8, 13)

        const expected = [ 0, 1, 1, 4, 9, 25, 64, 169 ]
        expect(list.transduce(xmap<number>(value => value * value), reducing.pushing))
            .toEqual(expected)
    })

    // test("", () => {
    //     const list = LazyList.of(0, 1, 1, 2, 3, 5, 8, 13)
    //
    //     const expected = "011492564169"
    //     expect(list.transduce(xmap<number, string>(value => String(value * value)), reducing.joining))
    //         .toEqual(expected)
    // })

    // test("", () => {
    //     const list = LazyList.of(0, 1, 1, 2, 3, 5, 8, 13)
    //
    //     const expected = [ 0, 1, 1, 4, 9, 25, 64, 169 ]
    //     // @ts-ignore
    //     const ox = list.transduce(xmap<number>(value => value * value), list.reducer())
    //     // expect()
    //     //     .toEqual(expected)
    //
    //     for (const x of ox) {
    //         console.log(x)
    //         expect(expected)
    //             .toContain(x)
    //     }
    // })
})