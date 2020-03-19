import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xevery from "./xevery"



describe("function xevery(predicate)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xevery<number | string>(x => !(Number(x) % 2))
            )

            it("should return a single boolean", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ false ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xevery<number | string>(x => !!(Number(x) % 2))
            )

            it("should return a single boolean", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ true ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2)),
                xevery<number>(x => !!(x % 2))
            )

            it("should return a single boolean", () => {
                expect(transduce(transducer, reducer, [] as string[], iterable))
                    .toEqual([ true ])
            })
        })
    })
})
