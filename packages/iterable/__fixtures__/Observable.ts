import reducing from "../../function/reducing/reducing"
import isReduced from "../../reflect/isReduced/isReduced"
import Reducer from "../../type/Reducer/Reducer"
import Transduced from "../../type/Transduced/Transduced"
import Transducer from "../../type/Transducer/Transducer"



class Observable<TValue> {
    public static from<TValue>(values: TValue[]): Observable<TValue> {
        return new Observable(next => {
            for (const value of values) {
                next(value)
            }
        })
    }

    public _subscription: (next: (value: TValue) => void, complete?: any) => void

    public constructor(subscription: (next: (value: TValue) => void, complete: any) => void) {
        this._subscription = subscription
    }

    public subscribe(next: (value: TValue) => void, complete?: any) {
        this._subscription(next, complete)
    }

    // reducer(it: Observable<any>) {
    //     const buffer: any[] = []
    //     const observable = new Observable(next => {
    //         it.subscribe(value => {
    //             buffer.push(value)
    //         })
    //     })
    //
    //
    //     const transduced = (accumulator: any, value: any) => {
    //         return accumulator
    //     }
    //
    //     transduced.initialize = () => {
    //         return buffer
    //     }
    //
    //     transduced.complete = (accumulator: any) => {
    //         return observable
    //     }
    //
    //     return transduced
    // }

    reducer() {
        const ctrl = {}

        // @ts-ignore
        const reducer = (accumulator, value) => {
            // @ts-ignore
            ctrl.next(value)
            return accumulator
        }

        reducer.initialize = () => {
            const observable = new Observable(() =>  null)
            observable._subscription = (next) => {
                // @ts-ignore
                ctrl.next = next
            }

            return observable
        }


        return reducer
    }
}

const transduceLazy = <TValue>(transducer: Transducer<TValue>, observable: Observable<TValue>): Observable<TValue> => {
    return new Observable<TValue>((next) => {
        const transduced = (observable: Observable<TValue>, value: TValue) => {
            next(value)
            return observable
        }

        transduced.initialize = () => {
            return observable
        }

        transduced.complete = (observable: Observable<TValue>) => {
            return observable
        }

        const reducer = transducer(transduced)

        observable.subscribe(value => {
            reducer(observable, value)
        })
    })
}


const transduce = <TAccumulator, TValue>(transducer: Transducer<TValue>, observable: Observable<TValue>, reducer: Transduced<Reducer<Observable<TValue>, TValue>>): Observable<TValue> => {
    let accumulator = reducer.initialize() as unknown as Observable<TValue>

    const transduced = transducer(reducer)
    const buffer: TValue[] = []

    observable.subscribe((value) => {
        const product = transduced(accumulator, value)
        // accumulator._subscription = (next, complete) => {
        //     while (buffer.length) {
        //         buffer.shift()
        //         next(buffer.shift() as TValue)
        //     }
        //     if (isReduced(product)) {
        //         complete()
        //     }
        // }
    })

    return accumulator

    // return new Observable<TValue>((next, complete) => {
    //     controller.next = next
    //     controller.complete = complete
    // })
}


export default Observable