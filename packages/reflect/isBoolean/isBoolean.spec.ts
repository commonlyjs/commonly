import isBoolean from "./isBoolean"



describe(`function isBoolean(x)`, () => {
    context(`x is a boolean`, () => {
        context(`x is constructed through a literal`, () => {
            context(`x is a true`, () => {
                it(`should return true`, () => {
                    expect(isBoolean(true))
                        .toBe(true)
                })
            })

            context(`x is a false`, () => {
                it(`should return true`, () => {
                    expect(isBoolean(false))
                        .toBe(true)
                })
            })
        })

        context(`x is constructed through a constructor function`, () => {
            context(`with a new keyword`, () => {
                context(`x is a true`, () => {
                    it(`should return true`, () => {
                        expect(isBoolean(new Boolean("true")))
                            .toBe(true)
                    })
                })

                context(`x is a false`, () => {
                    it(`should return true`, () => {
                        expect(isBoolean(new Boolean("false")))
                            .toBe(true)
                    })
                })
            })

            context(`with a function call`, () => {
                context(`x is a true`, () => {
                    it(`should return true`, () => {
                        expect(isBoolean(Boolean("true")))
                            .toBe(true)
                    })
                })

                context(`x is a false`, () => {
                    it(`should return true`, () => {
                        expect(isBoolean(Boolean("false")))
                            .toBe(true)
                    })
                })
            })
        })
    })
})
