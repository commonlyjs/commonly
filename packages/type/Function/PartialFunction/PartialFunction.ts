import VariadicFunction from "../VariadicFunction/VariadicFunction"



type Shift<TTuple extends unknown[]> =
    TTuple extends [ unknown, unknown, unknown, unknown, unknown ]
        ? [ TTuple[1], TTuple[2], TTuple[3], TTuple[4] ]
        :
    TTuple extends [ unknown, unknown, unknown, unknown ]
        ? [ TTuple[1], TTuple[2], TTuple[3] ]
        :
    TTuple extends [ unknown, unknown, unknown ]
        ? [ TTuple[1], TTuple[2] ]
        :
    TTuple extends [ unknown, unknown ]
        ? [ TTuple[1] ]
        :
    TTuple extends [ unknown ]
        ? [ void ]
        :
    never

type Reorder<TTuple extends unknown[], TIndexes extends number[]> =
    TTuple extends [ unknown, unknown, unknown, unknown, unknown ]
        ? [ TTuple[TIndexes[0]], TTuple[TIndexes[1]], TTuple[TIndexes[2]], TTuple[TIndexes[3]], TTuple[TIndexes[4]] ]
        :
    TTuple extends [ unknown, unknown, unknown, unknown ]
        ? [ TTuple[TIndexes[0]], TTuple[TIndexes[1]], TTuple[TIndexes[2]], TTuple[TIndexes[3]] ]
        :
    TTuple extends [ unknown, unknown, unknown ]
        ? [ TTuple[TIndexes[0]], TTuple[TIndexes[1]], TTuple[TIndexes[2]] ]
        :
    TTuple extends [ unknown, unknown ]
        ? [ TTuple[TIndexes[0]], TTuple[TIndexes[1]] ]
        :
    TTuple extends [ unknown ]
        ? [ TTuple[TIndexes[0]] ]
        :
    never


type PartialFunction<TResult, TParameters extends unknown[], TApplied extends unknown[]> =
    TApplied extends (unknown | undefined)[]
        ? VariadicFunction<TResult, unknown[]>
        :
    TApplied extends [ unknown, unknown, unknown, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Shift<Shift<TParameters>>>>>>
        :

    TApplied extends [ undefined, undefined, undefined, undefined ]
        ? VariadicFunction<TResult, TParameters>
        :
    TApplied extends [ undefined, undefined, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 3, 0, 1, 2, 4 ]>>>
        :
    TApplied extends [ undefined, undefined, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 2, 0, 1, 3, 4 ]>>>
        :
    TApplied extends [ undefined, unknown, undefined, undefined ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 1, 0, 2, 3, 4 ]>>>
        :
    TApplied extends [ unknown, undefined, undefined, undefined ]
        ? VariadicFunction<TResult, Shift<TParameters>>
        :
    TApplied extends [ undefined, undefined, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 2, 3, 0, 1, 4 ]>>>>
        :
    TApplied extends [ undefined, unknown, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 1, 3, 0, 2, 4 ]>>>>
        :
    TApplied extends [ unknown, undefined, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 0, 3, 1, 2, 4 ]>>>>
        :
    TApplied extends [ undefined, unknown, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 1, 2, 0, 3, 4 ]>>>>
        :
    TApplied extends [ unknown, undefined, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 0, 2, 1, 3, 4 ]>>>>
        :
    TApplied extends [ unknown, unknown, undefined, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<TParameters>>>
        :
    TApplied extends [ undefined, unknown, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Reorder<TParameters, [ 1, 2, 3, 0, 4 ]>>>>>
        :
    TApplied extends [ unknown, undefined, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Reorder<TParameters, [ 0, 2, 3, 1, 4 ]>>>>>
        :
    TApplied extends [ unknown, unknown, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Reorder<TParameters, [ 0, 1, 3, 2, 4 ]>>>>>
        :
    TApplied extends [ unknown, unknown, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<TParameters>>>>
        :
    TApplied extends [ unknown, unknown, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<Shift<TParameters>>>>>
        :

    TApplied extends [ undefined, undefined, undefined ]
        ? VariadicFunction<TResult, TParameters>
        :
    TApplied extends [ undefined, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 2, 0, 1, 3, 4 ]>>>
        :
    TApplied extends [ undefined, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 1, 0, 2, 3, 4 ]>>>
        :
    TApplied extends [ unknown, undefined, undefined ]
        ? VariadicFunction<TResult, Shift<TParameters>>
        :
    TApplied extends [ undefined, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 1, 2, 0, 3, 4 ]>>>>
        :
    TApplied extends [ unknown, undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Reorder<TParameters, [ 0, 2, 1, 3, 4 ]>>>>
        :
    TApplied extends [ unknown, unknown, undefined ]
        ? VariadicFunction<TResult, Shift<Shift<TParameters>>>
        :
    TApplied extends [ unknown, unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<Shift<TParameters>>>>
        :

    TApplied extends [ undefined, undefined ]
        ? VariadicFunction<TResult, TParameters>
        :
    TApplied extends [ unknown, undefined ]
        ? VariadicFunction<TResult, Shift<TParameters>>
        :
    TApplied extends [ undefined, unknown ]
        ? VariadicFunction<TResult, Shift<Reorder<TParameters, [ 1, 0, 2, 3, 4 ]>>>
        :
    TApplied extends [ unknown, unknown ]
        ? VariadicFunction<TResult, Shift<Shift<TParameters>>>
        :

    TApplied extends [ undefined ]
        ? VariadicFunction<TResult, TParameters>
        :
    TApplied extends [ unknown ]
        ? VariadicFunction<TResult, Shift<TParameters>>
        :

    TApplied extends []
        ? VariadicFunction<TResult, TParameters>
        :
    never



export default PartialFunction
