import isReduced from "../../reflect/isReduced/isReduced"
import Observable from "./Observable"



// @ts-ignore
const reduce = (reducer, observable) => {
    new Observable(next => {
        // @ts-ignore
        observable.subscribe(value => {
            const product = reducer(next, value)
            if (isReduced(product)) {
                next.complete(product.value)
            }
            next.complete(product)
        })
    })
}

test("", () => {
    const observable = Observable.from([ 0, 1, 1, 2, 3, 5 ])

    // @ts-ignore
    const r = reduce((accumulator, value) => null, observable)

    // console.log(r)
})