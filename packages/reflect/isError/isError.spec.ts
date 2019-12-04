import isError from "./isError"



describe(`function isError(x)`, () => {
    context(`x is an instance of Error`, () => {
        context(`x is an instance of Error`, () => {
            it(`should return true`, () => {
                expect(isError(new Error()))
                    .toBe(true)
            })
        })

        context(`x is an instance of TypeError`, () => {
            it(`should return true`, () => {
                expect(isError((new TypeError())))
                    .toBe(true)
            })
        })

        context(`x is an instance of SyntaxError`, () => {
            it(`should return true`, () => {
                expect(isError((new SyntaxError())))
                    .toBe(true)
            })
        })

        context(`x is an instance of ReferenceError`, () => {
            it(`should return true`, () => {
                expect(isError((new ReferenceError())))
                    .toBe(true)
            })
        })

        context(`x is an instance of RangeError`, () => {
            it(`should return true`, () => {
                expect(isError((new RangeError())))
                    .toBe(true)
            })
        })

        context(`x is an instance of EvalError`, () => {
            it(`should return true`, () => {
                expect(isError((new EvalError())))
                    .toBe(true)
            })
        })

        context(`x is an instance of URIError`, () => {
            it(`should return true`, () => {
                expect(isError((new URIError())))
                    .toBe(true)
            })
        })
    })
})
