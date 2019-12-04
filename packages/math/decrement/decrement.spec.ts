import decrement from "./decrement"



describe(`function decrement(number)`, () => {
    context("number is a number", () => {
        it(`should decrement the number by one`, () => {
            const number = 7

            expect(decrement(number))
                .toEqual(number - 1)
        })
    })
})
