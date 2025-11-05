export type validRequest = {
	queryStringParameters?: Record<string, string>;
	operationName: string;
	query: string;
	variables: Record<string, unknown>;
	accessToken: string;
}

export type validResponse = {
	data: any;
	errors?: string[];
} | {
	recieved: boolean;
};
