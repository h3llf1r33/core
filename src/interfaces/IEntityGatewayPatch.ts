import {Observable} from "rxjs"
import {HttpClientRequestOptions} from "../common/Http";


export interface IEntityGatewayPatch<ENTITY_ID, QUERY, RESPONSE_MODEL> {
    updateEntity(entityId: ENTITY_ID, query: Partial<QUERY>, config?: HttpClientRequestOptions): Observable<RESPONSE_MODEL>
}