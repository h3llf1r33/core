import {APIGatewayProxyEvent} from "aws-lambda";

export interface ILambdaRequestContext extends APIGatewayProxyEvent {}