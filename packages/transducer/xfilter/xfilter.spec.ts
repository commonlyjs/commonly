import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "./xfilter"
import xmap from "../xmap/xmap"
import xslice from "../xslice/xslice"



describe("function xfilter(predicate)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        it("should return an empty array", () => {
            expect(transduce(xfilter(() => false), iterable, reducer, [] as (number | string)[]))
                .toEqual([])
        })

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2))
            )

            it("should return an array without even values", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ 1, "1", "3", 5, 13, "21" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2))
            )

            it("should return an array without even values", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ 1, 1, 3, 5, 13, 21 ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xslice(4, Infinity),
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2))
            )

            it("should return an array without even values", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ 3, 5, 13, 21 ])
            })
        })
    })
})
