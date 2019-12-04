import isMap from "./isMap"



describe(`function isMap(x)`, () => {
    context(`x is an instance of Map`, () => {
        it(`should return true`, () => {
            expect(isMap(new Map()))
                .toBe(true)
        })
    })
})
