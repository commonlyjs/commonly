import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "./xmap"
import xslice from "../xslice/xslice"



describe("function xmap(mapper)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xmap<number | string>(String)
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ "0", "1", "1", "2", "3", "5", "8", "13", "21", "34" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xmap<number | string>(String),
                xfilter<number | string>(x => !!(Number(x) % 2))
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ "1", "1", "3", "5", "13", "21" ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xslice(5, Infinity),
                xmap<number | string>(String),
                xfilter<number | string>(x => !!(Number(x) % 2))
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ "5", "13", "21" ])
            })
        })
    })
})
