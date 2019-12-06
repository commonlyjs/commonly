import subtract from "./subtract"



describe(`function subtract(minuend, subtrahend)`, () => {
    context(`minuend and subtrahend are both numbers`, () => {
        it(`should return a result of a subtraction of minuend and subtrahend`, () => {
            expect(subtract(2, 2))
                .toEqual(0)
            expect(subtract(25, 75))
                .toEqual(-50)
            expect(subtract(75, 25))
                .toEqual(50)
        })
    })
})
