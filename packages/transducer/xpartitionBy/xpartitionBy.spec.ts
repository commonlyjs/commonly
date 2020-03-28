import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xpartition from "./xpartitionBy"



describe("function xpartition(mapper)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xpartition<number | string, string>(x => typeof x)
            )

            it("should return a partitioned array", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ [ "0" ], [ 1 ], [ "1" ], [ 2 ], [ "3" ],  [5 ], [ "8" ], [ 13 ], [ "21" ], [ 34 ] ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xpartition<number | string, string>(x => typeof x)
            )

            it("should return a partitioned array", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ [ 1 ], [ "1","3" ], [ 5, 13 ], [ "21" ] ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2)),
                xpartition<number, string>(x => typeof x)
            )

            it("should return a partitioned array", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ [ 1, 1, 3, 5, 13, 21 ] ])
            })
        })
    })
})
