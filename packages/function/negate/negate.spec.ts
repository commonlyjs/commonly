import negate from "./negate"



describe("function negate(predicate)", () => {
    context("predicate is an Array.isArray function", () => {
        const negated = negate(Array.isArray)

        it("should return true", () => {
            expect(negated({}))
                .toEqual(true)
        })

        it("should return false", () => {
            expect(negated([]))
                .toEqual(false)
        })
    })
})
