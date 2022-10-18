import { Http } from './http/http.service';
import { ProductApi } from './product/product';

const http = new Http([], []);
const productService = new ProductApi({ http });

export { http, productService };
