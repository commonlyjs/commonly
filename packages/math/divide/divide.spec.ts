import divide from "./divide"



describe(`function divide(dividend, divisor)`, () => {
    context(`dividend and divisor are both numbers`, () => {
        it(`should return a result of a division of dividend and divisor`, () => {
            expect(divide(2, 2))
                .toBe(1)
            expect(divide(25, 75))
                .toBe(1 / 3)
            expect(divide(75, 25))
                .toBe(3)
        })
    })
})
