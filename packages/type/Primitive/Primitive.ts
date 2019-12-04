import Nil from "../Nil/Nil"



/**
 * The Primitive type represents
 *  a union of {@link https://developer.mozilla.org/en-US/docs/Glossary/primitive | primitive} data types.
 * An {@link https://developer.mozilla.org/en-US/docs/Glossary/undefined | undefined},
 *  {@link https://developer.mozilla.org/en-US/docs/Glossary/null | null},
 *  {@link https://developer.mozilla.org/en-US/docs/Glossary/boolean | boolean},
 *  {@link https://developer.mozilla.org/en-US/docs/Glossary/number | number},
 *  {@link https://developer.mozilla.org/en-US/docs/Glossary/bigint | bigint},
 *  {@link https://developer.mozilla.org/en-US/docs/Glossary/string | string}
 *  and a {@ link https://developer.mozilla.org/en-US/docs/Glossary/symbol | symbol}.
 *
 * @since 1.0.0
 */
type Primitive =
    | Nil
    | boolean
    | number
    | string
    | symbol



export default Primitive
