import {IBaseRequestContext} from "../interfaces/IBaseRequestContext";
import {ILambdaRequestContext} from "../interfaces/ILambdaRequestContext";

export type RequestContext = IBaseRequestContext | ILambdaRequestContext;
