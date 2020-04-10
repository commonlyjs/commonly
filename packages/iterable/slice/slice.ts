import Iterable from "../../type/Iterable/Iterable"
import curry from "../../function/curry/curry"
import xslice from "../../transducer/xslice/xslice"
import transduce from "../transduce/transduce"



/**
 * Returns an iterable which contains a slice of elements of given `iterable`.
 *
 * @since 1.0.0
 *
 * @param start - is a beginning of a slice
 * @param end - is an end of a slice
 * @param iterable - is an iterable to be iterated over
 * @returns an iterable of the same type as the one given
 *
 * @example
 * ```
 * import { slice } from "@commonly/iterable"
 *
 * slice(1, 5, [ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 1, 1, 2, 3, 5 ]
 * ```
 */
const slice = <TValue>(start: number, end: number, iterable: Iterable<TValue>): Iterable<TValue> => {
    return transduce(xslice(start, end), iterable)
}



export default curry(slice) as unknown as {
    <TValue>(start: number, end: number, iterable: TValue[]): TValue[]
    (start: number, end: number, iterable: string): string
    <TValue>(start: number, end: number, iterable: Set<TValue>): Set<TValue>
    <TValue extends unknown[]>(start: number, end: number, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
    <TIterable extends Iterable<unknown>>(start: number, end: number, iterable: TIterable): TIterable

    (start: number, end: number): {
        <TValue>(iterable: TValue[]): TValue[]
        (iterable: string): string
        <TValue>(iterable: Set<TValue>): Set<TValue>
        <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
        <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
    }

    (start: number): {
        <TValue>(end: number, iterable: TValue[]): TValue[]
        (end: number, iterable: string): string
        <TValue>(end: number, iterable: Set<TValue>): Set<TValue>
        <TValue extends unknown[]>(end: number, iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
        <TIterable extends Iterable<unknown>>(end: number, iterable: TIterable): TIterable

        (end: number): {
            <TValue>(iterable: TValue[]): TValue[]
            (iterable: string): string
            <TValue>(iterable: Set<TValue>): Set<TValue>
            <TValue extends unknown[]>(iterable: Map<TValue[0], TValue[1]>): Map<TValue[0], TValue[1]>
            <TIterable extends Iterable<unknown>>(iterable: TIterable): TIterable
        }
    }
}
