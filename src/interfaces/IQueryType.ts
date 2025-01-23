import {IGenericFilterQuery} from "./IFilterQuery";
import {HttpClientRequestOptions} from "../common/Http";

export type IQueryType<T> = {
    data?: T;
    filterQuery?: IGenericFilterQuery;
    config?: HttpClientRequestOptions;
    captchaToken?: string;
    entityId?: string;
};