import isSet from "./isSet"



describe(`function isSet(x)`, () => {
    context(`x is an instance of Set`, () => {
        it(`should return true`, () => {
            expect(isSet(new Set()))
                .toBe(true)
        })
    })
})
