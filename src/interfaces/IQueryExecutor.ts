import {IDatabaseExpression} from "./IDatabaseExpression";

export interface IQueryExecutor<T extends IDatabaseExpression, C> {
    executeQuery(params: T, client: C): Promise<any[]>;
}