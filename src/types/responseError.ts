
export interface ErrorResponse {
    code: number;
    message: string;
    displayMessage?: string;
    issues?: { [key: string]: string };
}

export interface IResponse<Res> {
    data?: Res;
    error?: ErrorResponse;
    totalCount?: number;
    errors?: {
        [key: string]: string[];
    }
}

export interface ErrorResponseSchema {
    error?: ErrorResponse;
}