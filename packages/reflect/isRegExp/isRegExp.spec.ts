import isRegExp from "./isRegExp"



describe(`function isRegExp(x)`, () => {
    context(`x is an instance of RegExp`, () => {
        context(`x is constructed through a literal`, () => {
            it(`should return true`, () => {
                expect(isRegExp(/ab+c/))
                    .toBe(true)
            })
        })

        context(`x is constructed through a constructor function`, () => {
            context(`with a new keyword`, () => {
                it(`should return true`, () => {
                    expect(isRegExp(new RegExp("ab+c")))
                        .toBe(true)
                })
            })

            context(`with a function call`, () => {
                it(`should return true`, () => {
                    expect(isRegExp(RegExp("ab+c")))
                        .toBe(true)
                })
            })
        })
    })
})
