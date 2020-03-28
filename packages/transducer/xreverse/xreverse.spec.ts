import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xreverse from "./xreverse"



describe("function xreverse()", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xreverse<number | string>()
            )

            it("should return a reversed array", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ 34, "21", 13, "8", 5, "3", 2, "1", 1, "0" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xreverse<number | string>()
            )

            it("should return a reversed array", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ "21", 13, 5, "3", "1", 1 ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2)),
                xreverse<number>()
            )

            it("should return a reversed array", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ 21, 13, 5, 3, 1, 1 ])
            })
        })
    })
})
