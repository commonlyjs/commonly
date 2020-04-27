import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xhead from "./xhead"



describe("function xhead()", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xhead<number | string>()
            )

            it("should return an array with a first value", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ "0" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xhead()
            )

            it("should return an array with a first value", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ 1 ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2)),
                xhead<number>(),
            )

            it("should return an array with a first value", () => {
                expect(transduce(transducer, reducer, iterable, [] as number[]))
                    .toEqual([ 1 ])
            })
        })
    })
})
