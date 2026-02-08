// OrderService.js
import BaseService from "./BaseService.js";

class OrderService extends BaseService {
    createOrder(id) {
        this.log(`Order created: ${id}`);
    }
}

export default OrderService;
