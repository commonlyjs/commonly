import empty from "./empty"



describe("function empty(value)", () => {
    context("value is an array", () => {
        expect(empty([ 0, 1, 1, 2, 3 ]))
            .toEqual([])
    })

    context("value is a string", () => {
        expect(empty("01123"))
            .toEqual("")
    })
    
    context("value is an object", () => {
        expect(empty({ a: 0, b: 1, c: 1, d: 2, e: 3 }))
            .toEqual({})
    })

    context("value is a Set", () => {
        const value = new Set()
            .add(0)
            .add(1)
            .add(1)
            .add(2)
            .add(3)
        
        expect(empty(value))
            .toEqual(new Set())
    })

    context("value is an object", () => {
        const value = new Map()
            .set("a", 0)
            .set("b", 1)
            .set("c", 1)
            .set("d", 2)
            .set("e", 3)
        
        expect(empty(value))
            .toEqual(new Map())
    })
})
