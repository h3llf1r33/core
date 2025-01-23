export interface IRequestContext {
    headers: Record<string, string>;
    method: string;
    path: string;
    body?: any;
    query?: Record<string, string>;
    requestId: string;
}