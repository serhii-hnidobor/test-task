import { createGlobalState } from 'react-hooks-global-state';
import { ProductResponseDto } from '../constants/types/product/product-response.dto';
import { DataStatus } from '../constants/enums/data/status/data-status';

export type GlobalStateType = {
  error?: string;
  dataStatus: DataStatus;
  curProduct?: ProductResponseDto;
  productList: ProductResponseDto[];
};

const initialState: GlobalStateType = {
  error: '',
  curProduct: undefined,
  productList: [],
  dataStatus: DataStatus.IDLE,
};

const { setGlobalState, useGlobalState } = createGlobalState(initialState);

const setDataStatus = (dataStatus: DataStatus): void => {
  setGlobalState('dataStatus', dataStatus);
};

const setError = (error: string): void => {
  setGlobalState('error', error);
};

export { useGlobalState, setGlobalState, setDataStatus, setError };
