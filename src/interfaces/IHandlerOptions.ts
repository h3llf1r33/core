export interface IHandlerOptions {
    maxResponseSize?: number;
    allowedMethods?: readonly string[];
    headers?: Record<string, string>;
    corsOriginWhitelist?: string[];
}