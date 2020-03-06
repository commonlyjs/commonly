import identity from "../identity/identity"
import compose from "./compose"


describe("function compose(...functions)", () => {
    const f = (x: number) =>
        x + 1
    const g = (x: number) =>
        x * 2
    const h = (x: number) =>
        x / 2

    context("x equals 3", () => {
        const x = 3

        context("when composing from nothing, (identity)(x)", () => {
            const composed = compose()

            it("should equal identity(x)", () => {
                expect(composed(x))
                    .toEqual(identity(x))
            })
        })

        context("when composing a single functions, (f)(x)", () => {
            const composed = compose(f)

            it("should equal f(x)", () => {
                expect(composed(x))
                    .toEqual(f(x))
            })
        })

        context("when composing two functions, (g º f)(x)", () => {
            const composed = compose(g, f)

            it("should equal g(f(x))", () => {
                expect(composed(x))
                    .toEqual(g(f(x)))
            })
        })

        context("when composing three functions, (h º g º f)(x)", () => {
            const composed = compose(h, g, f)

            it("should equal h(g(f(x)))", () => {
                expect(composed(x))
                    .toEqual(h(g(f(x))))
            })
        })
    })
})
