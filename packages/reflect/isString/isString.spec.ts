import isString from "./isString"



describe(`function isString(x)`, () => {
    context(`x is a string`, () => {
        context(`x is constructed from a literal`, () => {
            it(`should return true`, () => {
                expect(isString(""))
                    .toBe(true)
            })
        })

        context(`x is constructed from a constructor`, () => {
            context(`with a new keyword`, () => {
                it(`should return true`, () => {
                    expect(isString(new String()))
                        .toBe(true)
                })
            })

            context(`with a function call`, () => {
                it(`should return true`, () => {
                    expect(isString(String()))
                        .toBe(true)
                })
            })
        })
    })
})
