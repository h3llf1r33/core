interface ISchemaBase {
    $schema?: string;
    $id?: string;
    title?: string;
    description?: string;
    default?: any;
    examples?: any[];
    definitions?: { [key: string]: IJsonSchema };
    const?: any;
    allOf?: IJsonSchema[];
    anyOf?: IJsonSchema[];
    oneOf?: IJsonSchema[];
    not?: IJsonSchema;
    if?: IJsonSchema;
    then?: IJsonSchema;
    else?: IJsonSchema;
    $ref?: string;
}

interface INullSchema extends ISchemaBase {
    type: "null";
}

interface IBooleanSchema extends ISchemaBase {
    type: "boolean";
}

interface INumberSchema extends ISchemaBase {
    type: "number";
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;
}

interface IIntegerSchema extends ISchemaBase {
    type: "integer";
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;
}

interface IStringSchema extends ISchemaBase {
    type: "string";
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: string;
}

interface IArraySchema extends ISchemaBase {
    type: "array";
    items?: IJsonSchema | IJsonSchema[];
    minItems?: number | { '$data': string };
    maxItems?: number | { '$data': string };
    uniqueItems?: boolean;
    contains?: IJsonSchema;
    minContains?: number;
    maxContains?: number;
}

interface IObjectSchema extends ISchemaBase {
    type: "object";
    properties?: { [key: string]: IJsonSchema };
    required?: string[];
    additionalProperties?: boolean | IJsonSchema;
    propertyNames?: { pattern: string };
    minProperties?: number;
    maxProperties?: number;
    patternProperties?: { [pattern: string]: IJsonSchema };
    dependencies?: { [key: string]: string[] | IJsonSchema };
}

// Union type for all possible schema types
export type IJSONSchemaType =
    | INullSchema
    | IBooleanSchema
    | INumberSchema
    | IIntegerSchema
    | IStringSchema
    | IArraySchema
    | IObjectSchema;

export interface IJsonSchema extends ISchemaBase {
    type?: IJSONSchemaType["type"];
    enum?: any[];
    const?: any;
    // Number/Integer
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;

    // String
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: string;

    // Array
    items?: IJsonSchema | IJsonSchema[];
    minItems?: number | { '$data': string };
    maxItems?: number | { '$data': string };
    uniqueItems?: boolean;
    contains?: IJsonSchema;
    minContains?: number;
    maxContains?: number;

    // Object
    properties?: { [key: string]: IJsonSchema };
    required?: string[];
    additionalProperties?: boolean | IJsonSchema;
    propertyNames?: { pattern: string };
    minProperties?: number;
    maxProperties?: number;
    patternProperties?: { [pattern: string]: IJsonSchema };
    dependencies?: { [key: string]: string[] | IJsonSchema };
    // Error Message specific to your current prop declaration
    errorMessage?: {
        properties?: {
            [key: string]: string | { [validationType: string]: string }
        }
    } | string | Record<string, string>;
}