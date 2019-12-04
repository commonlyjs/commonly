import isSymbol from "./isSymbol"



describe(`function isSymbol(x)`, () => {
    context(`x is a symbol`, () => {
        it(`should return true`, () => {
            expect(isSymbol(Symbol()))
                .toBe(true)
        })
    })
})
