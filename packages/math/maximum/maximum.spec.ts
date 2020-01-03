import maximum from "./maximum"



describe("function maximum(numbers)", () => {
    context("numbers is an array of numbers", () => {
        it("should return a maximum", () => {
            const numbers = [ 0, 1, 1, 2, 3, 5, 8 ]

            expect(maximum(numbers))
                .toEqual(8)
        })
    })
})