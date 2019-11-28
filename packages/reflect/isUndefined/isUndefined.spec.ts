import isUndefined from "./isUndefined"



describe(`function isUndefined(x)`, () => {
    context(`x is an undefined`, () => {
        it(`should return true`, () => {
            expect(isUndefined(undefined))
                .toBe(true)
        })
    })
})
