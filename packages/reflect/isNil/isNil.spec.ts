import isNil from "./isNil"



describe(`function isNil(x)`, () => {
    context(`x is a nil`, () => {
        context(`x is an undefined`, () => {
            it(`should return true`, () => {
                expect(isNil(undefined))
                    .toBe(true)
            })
        })

        context(`x is a null`, () => {
            it(`should return true`, () => {
                expect(isNil(null))
                    .toBe(true)
            })
        })
    })
})
