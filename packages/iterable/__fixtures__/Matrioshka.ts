import Iterable from "../../type/Iterable/Iterable"
import Reducible from "../../type/Reducible/Reducible"



class Matrioshka<TValue> implements Iterable<TValue>, Reducible<Matrioshka<TValue>, TValue> {
    private _matrioshka: Matrioshka<TValue> | null = null
    private readonly _value: TValue | null = null

    constructor(values: TValue[] = []) {
        const [ value = null, ...remainingValues ] = values

        if (value !== null) {
            this._value = value
        }

        if (remainingValues.length > 0) {
            this._matrioshka = new Matrioshka<TValue>(remainingValues)
        }
    }

    public put(value: TValue): void {
        this._matrioshka = new Matrioshka<TValue>([ value ])
    }

    public next(): Matrioshka<TValue> | null {
        return this._matrioshka
    }

    public *[Symbol.iterator](): Iterator<TValue> {
        if (this._value != null) {
            yield this._value
        }

        if (this._matrioshka != null) {
            yield* this._matrioshka
        }
    }

    public [Reducible.reducer]() {
        const state = {
            root: null as Matrioshka<TValue> | null
        }

        const reducer = (accumulator: Matrioshka<TValue>, value: TValue): Matrioshka<TValue> => {
            accumulator.put(value)
            const matrioshka = accumulator.next()
            if (state.root === null) {
                state.root = matrioshka
            }
            if (matrioshka) {
                return matrioshka
            } else {
                return accumulator
            }
        }

        reducer.initialize = (): Matrioshka<TValue> => {
            return new Matrioshka()
        }

        reducer.complete = (accumulator: Matrioshka<TValue>): Matrioshka<TValue> => {
            const parent = state.root
            state.root = null
            if (parent) {
                return parent
            } else {
                return accumulator
            }
        }

        return reducer
    }
}



export default Matrioshka