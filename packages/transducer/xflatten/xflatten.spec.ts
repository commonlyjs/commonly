import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xflatten from "./xflatten"
import xslice from "../xslice/xslice"



describe("function xflatten()", () => {
    const previous = (n: number) => {
        let m = 5 * n * n - 4
        let x = Math.round(Math.sqrt(m))
        if (m != x * x) {
            m = 5 * n * n + 4
            x = Math.round(Math.sqrt(m))
        }
        return (x - n) / 2
    }

    context("transducing context is an array reduction", () => {
        const iterable = [ ["1"], 2, ["5"], 13, ["34"] ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xflatten<number | string[]>()
            )

            it("should return a flat array", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ "1", 2, "5", 13, "34" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string[]>(x => Array.isArray(x)),
                xflatten<number | string[]>()
            )

            it("should return an array with injected values", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ "1", "5", "34" ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string[], (number | string[])[]>(x => [ x ]),
                xfilter<(number | string[])[]>(x => Array.isArray(x)),
                xflatten<(number | string[])[]>()
            )

            it("should return an array with injected values", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ ["1"], 2, ["5"], 13, ["34"] ])
            })
        })
    })
})
