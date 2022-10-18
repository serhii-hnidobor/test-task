import { HttpMethod, PRODUCT_PATH } from '../../constants/enums/enums';
import { ProductResponseDto } from '../../constants/types/product/product-response.dto';
import { Http } from '../http/http.service';

type Constructor = {
  http: Http;
};

class ProductApi {
  #http: Http;

  constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getAllProducts(): Promise<ProductResponseDto[]> {
    return this.#http.load({
      url: PRODUCT_PATH,
      options: {
        method: HttpMethod.GET,
      },
    });
  }
}

export { ProductApi };
