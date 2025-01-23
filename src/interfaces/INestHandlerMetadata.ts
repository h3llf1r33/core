import {Type} from "@nestjs/common";

export interface INestHandlerMetadata {
    path?: string;
    method?: string;
    providers?: Type<any>[];
    imports?: Type<any>[];
}