import Completion from "../../type/Completion/Completion"
import identity from "../identity/identity"



/**
 * [Not yet documented]
 * 
 * @since 1.0.0
 * 
 * @param f
 * @returns
 */
const completing = <TFunction extends Function, TProduct>(f: TFunction): TFunction & { completion: Completion<TProduct>} => {
    // @ts-ignore
    f.completion = identity
    // @ts-ignore
    return f
}



export default completing
