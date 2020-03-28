import Reducer from "../Reducer/Reducer"



/**
 * [Not yet documented]
 *
 * @since 1.0.0
 */
type Transduced<TReducer extends Reducer<any, any>> =
    TReducer & Required<TReducer>



export default Transduced