import {IEntityGateway} from "./IEntityGateway";
import {Observable} from "rxjs";
import {HttpClientRequestOptions} from "../common/Http";


export interface IEntityGatewayRead<ENTITY_ID, FILTER_QUERY, RESPONSE_MODEL> extends IEntityGateway {
    read(entityId?: ENTITY_ID, filterQuery?: FILTER_QUERY, config?: HttpClientRequestOptions): Observable<RESPONSE_MODEL>
}