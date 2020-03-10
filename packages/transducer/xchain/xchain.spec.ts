import compose from "../../function/compose/compose"
import transduce from "../../iterable/transduce/transduce"
import xfilter from "../xfilter/xfilter"
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

    const next = (n: string) => {
        const x = Number(n) * (1 + Math.sqrt(5)) / 2
        return Math.round(x)
    }

    context("transducing context is an array reduction", () => {
        const iterable = [ "1", 2, "5", 13, "34" ]
        const reducer = <TValue>(accumulator: TValue[], value: TValue): TValue[] => {
            accumulator.push(value)
            return accumulator
        }

        context("transducer is composed from a single transducing function", () => {
            const transducer = compose(
                xchain<number | string, string>(x => [ String(previous(Number(x))), String(x) ])
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, reducer, [] as string[], iterable))
                    .toEqual([ "0", "1", "1", "2", "3", "5", "8", "13", "21", "34" ])
            })
        })

        context("transducer is composed from two transducing functions", () => {
            const transducer = compose(
                xchain<number | string, string>(x => [ String(previous(Number(x))), String(x) ]),
                xfilter<string>(x => !!(Number(x) % 2))
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, reducer, [] as string[], iterable))
                    .toEqual([ "1", "1", "3", "5", "13", "21" ])
            })
        })

        context("transducer is composed from three transducing functions", () => {
            const transducer = compose(
                xslice<number | string>(2, Infinity),
                xchain<number | string, string>(x => [ String(previous(Number(x))), String(x) ]),
                xfilter<string>(x => !!(Number(x) % 2))
            )

            it("should return an array with a single value", () => {
                expect(transduce(transducer, reducer, [] as string[], iterable))
                    .toEqual([ "3", "5", "13", "21" ])
            })
        })
    })
})
