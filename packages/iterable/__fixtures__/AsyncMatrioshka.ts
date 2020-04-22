import Reducible from "../../type/Reducible/Reducible"



class AsyncMatrioshka<TValue> implements AsyncIterable<TValue>, Reducible<AsyncMatrioshka<TValue>, TValue> {
    private _matrioshka: AsyncMatrioshka<TValue> | null = null
    private readonly _value: TValue | null = null

    constructor(values: TValue[] = []) {
        const [ value = null, ...remainingValues ] = values

        if (value !== null) {
            this._value = value
        }

        if (remainingValues.length > 0) {
            this._matrioshka = new AsyncMatrioshka<TValue>(remainingValues)
        }
    }

    public put(value: TValue): void {
        this._matrioshka = new AsyncMatrioshka<TValue>([ value ])
    }

    public next(): AsyncMatrioshka<TValue> | null {
        return this._matrioshka
    }

    public async *[Symbol.asyncIterator](): AsyncIterator<TValue> {
        if (this._value != null) {
            yield this._value
        }

        if (this._matrioshka != null) {
            yield* this._matrioshka
        }
    }

    public [Reducible.reducer]() {
        const state = {
            root: null as AsyncMatrioshka<TValue> | null
        }

        const reducer = (accumulator: AsyncMatrioshka<TValue>, value: TValue): AsyncMatrioshka<TValue> => {
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

        reducer.initialize = (): AsyncMatrioshka<TValue> => {
            return new AsyncMatrioshka()
        }

        reducer.complete = (accumulator: AsyncMatrioshka<TValue>): AsyncMatrioshka<TValue> => {
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



export default AsyncMatrioshka