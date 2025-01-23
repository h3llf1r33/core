export class DynamoValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DynamoValidationError';
    }
}