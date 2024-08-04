import axios, { AxiosInstance } from "axios";
import { API_URL } from "./var.constant";
import { RegisterBookProductDto, UpdateBookProductDto } from "./product.type";

export default class ProductsApi {

    private instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: `${API_URL}/stock-product`,
        })
    }


    async register(body: RegisterBookProductDto) {
        try {
            const response = await this.instance.post("", body)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }

    async update(id: string, body: UpdateBookProductDto) {
        try {
            const response = await this.instance.put(`/${id}`, body)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }
    async getById(id: string) {
        try {
            const response = await this.instance.get(`/${id}`)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }
    
    async getProducts() {
        try {
            const response = await this.instance.get("/book-products")
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }
} 