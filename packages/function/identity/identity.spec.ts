import identity from "./identity"



describe(`function identity(x)`, () => {
    context(`x is an undefined`, () => {
        it(`should return undefined`, () => {
            expect(identity(undefined))
                .toBe(undefined)
        })
    })

    context(`x is a null`, () => {
        it(`should return null`, () => {
            expect(identity(null))
                .toBe(null)
        })
    })
})
