import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfind from "./xfind"
import xmap from "../xmap/xmap"
import xslice from "../xslice/xslice"



describe("function xfind(predicate)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        it("should return an empty array", () => {
            expect(transduce(xfind(() => false), iterable, reducer, [] as (number | string)[]))
                .toEqual([])
        })

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xfind<number | string>(x => !!(Number(x) % 2))
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ 1 ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfind<number>(x => !!(x % 2))
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ 1 ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xslice(3, Infinity),
                xmap<number | string, number>(Number),
                xfind<number>(x => !!(x % 2))
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ 3 ])
            })
        })
    })
})
