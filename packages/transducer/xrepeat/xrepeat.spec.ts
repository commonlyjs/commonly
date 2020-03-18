import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xrepeat from "./xrepeat"



describe("function xrepeat()", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21" ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xrepeat<number | string>(2)
            )

            it("should return an array with four first values", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ "0", "0", 1, 1, "1", "1", 2, 2, "3", "3", 5, 5, "8", "8", 13, 13, "21", "21" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xrepeat<number | string>(2)
            )

            it("should return an array with four first values", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ 1, 1, "1", "1", "3", "3", 5, 5, 13, 13, "21", "21" ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2)),
                xrepeat<number>(2)
            )

            it("should return an array with four first values", () => {
                expect(transduce(transducer, reducer, [] as string[], iterable))
                    .toEqual([ 1, 1, 1, 1, 3, 3, 5, 5, 13, 13, 21, 21 ])
            })
        })
    })
})
