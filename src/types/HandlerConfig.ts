import {IQueryType} from "../interfaces/IQueryType";
import {IUseCaseInlineFunc} from "./IUseCaseInlineFunc";
import {DynamicHandlerChain} from "./DynamicHandlerChain";
import {IBaseRequestContext} from "../interfaces/IBaseRequestContext";
import {IJsonSchema} from "../interfaces/IJsonSchema";
import {DataReflector} from "./DataReflector";

export interface HandlerConfig<
    INITIAL_QUERY_DTO extends Record<string, any> | undefined,
    HANDLERS extends readonly IUseCaseInlineFunc<any, unknown, any>[]
> {
    handlers: DynamicHandlerChain<INITIAL_QUERY_DTO, HANDLERS>;
    initialBodyReflector?: DataReflector<any, any>;
    initialQueryReflector?: DataReflector<IBaseRequestContext, IQueryType<INITIAL_QUERY_DTO>>;
    bodySchema?: IJsonSchema;
    timeoutMs?: number;
    errorToStatusCodeMapping?: Record<number, Array<new (...args: any[]) => Error>>;
}