import {IGenericFilterQuery, IPaginatedResponse} from './IFilterQuery';

export interface IDatabaseService<T> {
    fetchWithFiltersAndPagination<T>(
        query: IGenericFilterQuery,
        client: any
    ): Promise<IPaginatedResponse<T>>;
}