import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xsome from "./xsome"



describe("function xsome(predicate)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xsome<number | string>(x => !(Number(x) % 2))
            )

            it("should return a single boolean", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ true ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xsome<number | string>(x => !(Number(x) % 2))
            )

            it("should return a single boolean", () => {
                expect(transduce(transducer, reducer, iterable, [] as (number | string)[]))
                    .toEqual([ false ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2)),
                xsome<number>(x => !(x % 2))
            )

            it("should return a single boolean", () => {
                expect(transduce(transducer, reducer, iterable, [] as string[]))
                    .toEqual([ false ])
            })
        })
    })
})
