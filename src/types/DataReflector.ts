type CustomJsonPath = string & { __brand?: 'CustomJsonPath' };
type ArrayIndex = `[${number}]`;
type ArraySlice = `[${number}:${number}]` | '[*]' | `[${number}:]` | `[:${number}]`;
type ArrayAccess = ArrayIndex | ArraySlice;

type RecursivePath<T> = T extends Array<infer U>
    ? `${ArrayAccess}${RecursivePath<U>}` | ArrayAccess
    : T extends object
        ? {
            [K in keyof T & string]: `['${K}']${RecursivePath<T[K]>}` | `['${K}']`;
        }[keyof T & string]
        : '';

type JsonPath<T> = `$${RecursivePath<T>}`;

export type DataReflectorValue<Input, Output> =
    | JsonPath<Input>
    | CustomJsonPath
    | ((input: Input) => Output)
    | { [K in keyof Output]: DataReflectorValue<Input, Output[K]> };

export type DataReflector<Input, Output> = {
    [K in keyof Output]: DataReflectorValue<Input, Output[K]>;
};