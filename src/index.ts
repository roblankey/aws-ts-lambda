import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<any> => {
    console.log('Executing event...');

	return {
		statusCode: 200,
		body: "Hello world"
	}
}
