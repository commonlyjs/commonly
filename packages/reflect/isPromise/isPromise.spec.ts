import isPromise from "./isPromise"



describe(`function isPromise(x)`, () => {
    context(`x is an instance of Promise`, () => {
        context(`x is constructed through a factory method`, () => {
            it(`should return true`, () => {
                expect(isPromise(Promise.resolve()))
                    .toBe(true)
            })
        })

        context(`x is constructed through a constructor function`, () => {
            it(`should return true`, () => {
                expect(isPromise(new Promise(() => void 0)))
                    .toBe(true)
            })
        })
    })
})
