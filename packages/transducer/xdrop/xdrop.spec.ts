import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xdrop from "./xdrop"



describe("function xdrop(n)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xdrop<number | string>(4)
            )

            it("should return an array without four first items", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ "3", 5, "8", 13, "21", 34 ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xdrop<number | string>(4)
            )

            it("should return an array without four first values", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ 13, "21" ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, string>(String),
                xfilter<string>(x => !!(Number(x) % 2)),
                xdrop<string>(4),
            )

            it("should return an array without four first values", () => {
                expect(transduce(transducer, reducer, iterable, [] as string[]))
                    .toEqual([ "13", "21" ])
            })
        })
    })
})
