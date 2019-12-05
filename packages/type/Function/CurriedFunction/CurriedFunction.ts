import CurriedBinaryFunction from "./CurriedBinaryFunction"
import CurriedQuaternaryFunction from "./CurriedQuaternaryFunction"
import CurriedQuinaryFunction from "./CurriedQuinaryFunction"
import CurriedTernaryFunction from "./CurriedTernaryFunction"
import CurriedUnaryFunction from "./CurriedUnaryFunction"
import NullaryFunction from "../NullaryFunction/NullaryFunction"



type CurriedFunction<TResult, TParameters> =
    TParameters extends [ unknown, unknown, unknown, unknown, unknown ]
        ? CurriedQuinaryFunction<TResult, TParameters[0], TParameters[1], TParameters[2], TParameters[3], TParameters[4]>
        :

    TParameters extends [ unknown, unknown, unknown, unknown ]
        ? CurriedQuaternaryFunction<TResult, TParameters[0], TParameters[1], TParameters[2], TParameters[3]>
        :

    TParameters extends [ unknown, unknown, unknown ]
        ? CurriedTernaryFunction<TResult, TParameters[0], TParameters[1], TParameters[2]>
        :

    TParameters extends [ unknown, unknown ]
        ? CurriedBinaryFunction<TResult, TParameters[0], TParameters[1]>
        :

    TParameters extends [ unknown ]
        ? CurriedUnaryFunction<TResult, TParameters[0]>
        :

    TParameters extends [ void ]
        ? NullaryFunction<TResult>
        :

    never



export default CurriedFunction
