import {IUseCase} from "../interfaces/IUseCase";
import {IQueryType} from "../interfaces/IQueryType";
import {IBaseRequestContext} from "../interfaces/IBaseRequestContext";

export type IUseCaseInlineFunc<
    FUNC_DTO,
    USECASE_QUERY,
    USECASE_RESPONSE
> = (
    query: IQueryType<FUNC_DTO>,
    context: IBaseRequestContext
) => IUseCase<USECASE_QUERY, USECASE_RESPONSE>;