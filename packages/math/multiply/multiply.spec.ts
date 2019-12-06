import multiply from "./multiply"



describe(`function multiply(multiplier, multiplicand)`, () => {
    context(`multiplier and multiplicand are both numbers`, () => {
        it(`should return a result of a multiplication of multiplier and multiplicand`, () => {
            expect(multiply(2, 2))
                .toBe(4)
            expect(multiply(25, 75))
                .toBe(1875)
            expect(multiply(75, 25))
                .toBe(1875)
        })
    })
})
