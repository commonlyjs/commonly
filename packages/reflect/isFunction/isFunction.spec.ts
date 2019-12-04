import isFunction from "./isFunction"



describe(`function isFunction(x)`, () => {
    context(`x is a function`, () => {
        context(`x is constructed through a literal`, () => {
            it(`should return true`, () => {
                expect(isFunction(() => void 0))
                    .toBe(true)
            })
        })

        context(`x is constructed through a constructor function with new`, () => {
            it(`should return true`, () => {
                expect(isFunction(new Function("void 0")))
                    .toBe(true)
            })
        })

        context(`x is constructed through a constructor function without new`, () => {
            it(`should return true`, () => {
                expect(isFunction(Function("void 0")))
                    .toBe(true)
            })
        })
    })
})
