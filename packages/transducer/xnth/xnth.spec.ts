import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xnth from "./xnth"



describe("function xnth(i)", () => {
    context("transducing context is an array reduction", () => {
        const iterable = [ "0", 1, "1", 2, "3", 5, "8", 13, "21", 34 ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xnth<number | string>(4)
            )

            it("should return an array with a fourth value", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ "3" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xnth(4),
                xfilter<number | string>(x => !!(Number(x) % 2))
            )

            it("should return an array with a fourth value", () => {
                expect(transduce(transducer, reducer, [] as (number | string)[], iterable))
                    .toEqual([ "3" ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xnth<number>(4),
                xfilter<number>(x => !!(x % 2))
            )

            it("should return an array with a fourth value", () => {
                expect(transduce(transducer, reducer, [] as number[], iterable))
                    .toEqual([ 3 ])
            })
        })
    })
})
