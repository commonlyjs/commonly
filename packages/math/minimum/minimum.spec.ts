import minimum from "./minimum"



describe("function minimum(numbers)", () => {
    context("numbers is an array of numbers", () => {
        it("should return a minimum", () => {
            const numbers = [ 0, 1, 1, 2, 3, 5, 8 ]

            expect(minimum(numbers))
                .toEqual(0)
        })
    })
})