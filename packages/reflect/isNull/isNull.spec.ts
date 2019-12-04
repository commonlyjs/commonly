import isNull from "./isNull"



describe(`function isNull(x)`, () => {
    context(`x is a null`, () => {
        it(`should return true`, () => {
            expect(isNull(null))
                .toBe(true)
        })
    })
})
