import {IUseCaseInlineFunc} from "./IUseCaseInlineFunc";

export type DynamicHandlerChain<InitialQuery, Handlers> =
    Handlers extends [infer First, ...infer Rest]
        ? First extends IUseCaseInlineFunc<InitialQuery, any, infer NextResponse>
            ? [First, ...DynamicHandlerChain<NextResponse, Rest>]
            : never
        : [];