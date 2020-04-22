import identity from "../../../function/identity/identity"
import Reducer from "../../../type/Reducer/Reducer"
import Transduced from "../../../type/Transduced/Transduced"
import Transducer from "../../../type/Transducer/Transducer"



interface Observer<TValue> {
    next: (value: TValue) => void
    complete: () => void
}


class Observable<TValue> {
    private readonly _subscription: (observer: Observer<TValue>) => void

    static of<TValue>(...values: TValue[]): Observable<TValue> {
        return new Observable<TValue>((observer) => {
            for (const value of values) {
                observer.next(value)
            }
            observer.complete()
        })
    }

    constructor(subscription: (observer: Observer<TValue>) => void) {
        this._subscription = subscription
    }

    reducer<TAccumulator, TValueB = TValue>(): Transduced<Reducer<Observable<TValueB>, TValueB>> {
        const state = {
            observer: null as unknown as Observer<TValueB>
        }

        const reducer = (accumulator: Observable<TValueB>, value: TValueB) => {
            return accumulator
        }

        reducer.initialize = (thunk) => {
            return new Observable<TValueB>((observer) => {
                state.observer = observer
                thunk()
            })
        }

        reducer.complete = (accumulator: Observable<TValueB>) => {
            console.log(accumulator, state)
            state.observer.complete()
            return accumulator
        }

        return reducer
    }

    transduce<TValueB = TValue>(transducer: Transducer<TValue, TValueB>): Observable<TValueB>
    transduce<TAccumulator, TValueB = TValue>(transducer: Transducer<TValue, TValueB>, reducer: Transduced<Reducer<TAccumulator, TValueB>> = this.reducer()): TAccumulator {
        const transduced = transducer(reducer)

        const run = () => {
            this.subscribe({
                next: (value) => {
                    transduced(state.accumulator, value)
                },
                complete: () => {
                    state.accumulator = transduced.complete(state.accumulator)
                }
            })
        }

        const state = {
            accumulator: reducer.initialize(run)
        }


        return state.accumulator
    }

    subscribe(observer: Partial<Observer<TValue>>) {
        this._subscription(Object.assign({
            next: identity,
            complete: identity
        }, observer))
    }
}



export default Observable