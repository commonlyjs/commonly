import isObject from "./isObject"



describe(`function isObject(x)`, () => {
    context(`x is an object`, () => {
        context(`x is constructed from a literal`, () => {
            it(`should return true`, () => {
                expect(isObject({}))
                    .toBe(true)
            })
        })

        context(`x is constructed from a constructor function`, () => {
            context(`with a new keyword`, () => {
                expect(isObject(new Object()))
                    .toBe(true)
            })

            context(`with a function call`, () => {
                expect(isObject(Object()))
                    .toBe(true)
            })
        })
    })

    context(`x is a null`, () => {
        expect(isObject(null))
            .toBe(false)
    })
})
