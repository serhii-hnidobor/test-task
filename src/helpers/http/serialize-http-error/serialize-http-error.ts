import { HttpError } from '../../../constants/exceptions/exceptions';

export type SerializedHttpError = {
  status: number;
  errorCode?: string;
  message?: string;
  name?: string;
};
export const serializeHttpError = (error: HttpError): SerializedHttpError => {
  return { message: error.message, status: error.status, errorCode: error.errorCode, name: error.name };
};
