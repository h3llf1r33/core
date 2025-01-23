import {IFilterQuery} from './IFilterQuery';
import {IDatabaseExpression} from "./IDatabaseExpression";

export interface IFilterExpressionBuilder<T extends IDatabaseExpression> {
    buildFilterExpression(filters: IFilterQuery[]): T;
}