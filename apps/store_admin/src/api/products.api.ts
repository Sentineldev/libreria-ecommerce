import axios, { AxiosInstance } from "axios";
import { API_URL } from "./var.constant";

export default class ProductsApi {

    private instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: `${API_URL}/stock-product`,
        })
    }



    async getProducts() {
        try {
            const response = await this.instance.get("/book-products")
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error) {
                return error.response;
            }
        }
    }
} 