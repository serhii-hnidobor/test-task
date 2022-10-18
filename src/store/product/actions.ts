import { setDataStatus, setError, setGlobalState } from '../state';
import { productService } from '../../services/services';
import { DataStatus } from '../../constants/enums/data/status/data-status';

export const getAllProducts = async (): Promise<void> => {
  setDataStatus(DataStatus.PENDING);
  try {
    const product = await productService.getAllProducts();
    setGlobalState('productList', product);
    setDataStatus(DataStatus.FULFILLED);
  } catch (e) {
    if (e instanceof Error) {
      setDataStatus(DataStatus.REJECTED);
      setError(e.message as string);
    }
  }
};
