import increment from "./increment"



describe("function increment(number)", () => {
    context("number is a number", () => {
        it("should increment the number by one", () => {
            const number = 7

            expect(increment(number))
                .toEqual(number + 1)
        })
    })
})
