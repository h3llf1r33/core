export class SchemaValidationError extends Error {
    constructor(message: string, public readonly errors?: any[]) {
        super(message);
        this.name = 'SchemaValidationError';
    }
}