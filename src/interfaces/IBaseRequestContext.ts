export interface IBaseRequestContext {
    headers: Record<string, string>;
    method: string;
    path: string;
    body?: any;
    queryParameters?: Record<string, string>;
    pathParameters?: Record<string, string>;
    requestId: string;
}