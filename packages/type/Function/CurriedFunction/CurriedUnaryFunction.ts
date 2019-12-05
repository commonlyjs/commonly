interface CurriedUnaryFunction<TResult, TA> {
    (a: undefined): CurriedUnaryFunction<TResult, TA>
    (a: TA): TResult
}



export default CurriedUnaryFunction
