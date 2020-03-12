import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xpartition from "./xpartition"


describe("function xpartition(predicate)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xpartition<number | string>(x => !!(Number(x) % 2))
            )

            it("should return an array of two arrays, first with odd and second with even values", () => {
                expect(transduce(transducer, reducer, [], iterable))
                    .toEqual([
                        [ 1, "1", "3", 5, 13, "21" ],
                        [ "0", 2, "8", 34 ]
                    ])
            })
        })

        // context("transducer is composed from two transducing functions", () => {
        //     const transducer = compose(
        //         xpartition<number | string>(x => !!(Number(x) % 2)),
        //         xmap<number | string>(x => "!!(Number(x) % 2)")
        //     )
        //
        //     it("should return an array of two arrays, first with odd and second with even values", () => {
        //         expect(transduce(transducer, reducer, [], iterable))
        //             .toEqual([
        //                 [ 1, "1", "3", 5, 13, "21" ],
        //                 [] // [ "0", 2, "8", 34 ]
        //             ])
        //     })
        // })
    })

    context("transducing context is an array reduction", () => {
        const iterable = new Set([ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ])
        const reducer = <TValue>(accumulator: Set<TValue>, value: TValue): Set<TValue> => {
            accumulator.add(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xpartition<number | string>(x => !!(Number(x) % 2))
            )

            it("should return an array of two arrays, first with odd and second with even values", () => {
                expect(transduce(transducer, reducer, new Set(), iterable))
                    .toEqual([
                        new Set([ 1, "1", "3", 5, 13, "21" ]),
                        new Set([ "0", 2, "8", 34 ])
                    ])
            })
        })
    })

})
