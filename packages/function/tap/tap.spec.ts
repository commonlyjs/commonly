import tap from "./tap"



describe("function tap(interceptor, value)", () => {
    it("should return a passed in value", () => {
        expect(tap(x => x ** x, 2))
            .toEqual(2)
    })
})
