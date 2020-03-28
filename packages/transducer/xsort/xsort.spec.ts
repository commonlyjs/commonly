import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xsort from "./xsort"



describe("function xsort(comparator)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ 1, "8", "21", 13, 2, "1", "0", 5, 34, "3" ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xsort<number | string>((a, b) => Number(a) - Number(b))
            )

            it("should return an ordered array", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xsort<number | string>((a, b) => Number(a) - Number(b))
            )

            it("should return an ordered array", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ 1, "1", "3", 5, 13, "21" ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2)),
                xsort<number>((a, b) => a - b)
            )

            it("should return an ordered array", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ 1, 1, 3, 5, 13, 21 ])
            })
        })
    })
})
