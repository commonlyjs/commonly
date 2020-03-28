import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
import xmap from "../xmap/xmap"
import xchain from "./xchain"
import xslice from "../xslice/xslice"



describe("function xchain(mapper)", () => {
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
        const iterable = [ "1", 2, "5", 13, "34" ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("iterable is a nested array", () => {
            const iterable = [ ["1"], [2], ["5"], [13], ["34"] ]

            const transducer = compose(
                xchain<(number | string)[], number | string>(x => x)
            )

            it("should return a flat array", () => {
                expect(transduce(transducer, iterable, reducer, [] as (number | string)[]))
                    .toEqual([ "1", 2, "5", 13, "34" ])
            })
        })

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xchain<number | string, string>(x => [ String(previous(Number(x))), String(x) ])
            )

            it("should return an array with injected values", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ "0", "1", "1", "2", "3", "5", "8", "13", "21", "34" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xfilter<number | string>(x => !!(Number(x) % 2)),
                xchain<number | string, string>(x => [ String(previous(Number(x))), String(x) ])
            )

            it("should return an array with injected values", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ "0", "1", "3", "5", "8", "13" ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xmap<number | string, number>(Number),
                xfilter<number>(x => !!(x % 2)),
                xchain<number>(x => [ previous(x), x ])
            )

            it("should return an array with injected values", () => {
                expect(transduce(transducer, iterable, reducer, [] as string[]))
                    .toEqual([ 0, 1, 3, 5, 8, 13 ])
            })
        })
    })
})
