import isNumber from "./isNumber"



describe(`function isNumber(x)`, () => {
    context(`x is a number`, () => {
        context(`x is a number 0`, () => {
            it(`should return true`, () => {
                expect(isNumber(0))
                    .toBe(true)
            })
        })

        context(`x is a NaN`, () => {
            it(`should return true`, () => {
                expect(isNumber(NaN))
                    .toBe(true)
            })
        })

        context(`x is an Infinity`, () => {
            it(`should return true`, () => {
                expect(isNumber(Infinity))
                    .toBe(true)
            })
        })

        context(`x is constructed through a constructor function`, () => {
            context(`with a new keyword`, () => {
                it(`should return true`, () => {
                    expect(isNumber(new Number(0)))
                        .toBe(true)
                })
            })

            context(`with a function call`, () => {
                it(`should return true`, () => {
                    expect(isNumber(Number(0)))
                        .toBe(true)
                })
            })
        })
    })
})
