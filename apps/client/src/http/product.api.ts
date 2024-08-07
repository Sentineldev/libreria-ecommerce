import axios, { AxiosInstance, AxiosResponse } from "axios";
import StorageUtils from "../utils/storage";
import { API_URL } from "./api.config";

export default class ProductApi {

    private instance: AxiosInstance;

    constructor() {


        const token = StorageUtils.GetToken();
        this.instance = axios.create({
            baseURL: `${API_URL}/stock-product`,
            headers: { Authorization: `Bearer ${token}` }
        })
    }


    async getProducts(): Promise<AxiosResponse> {
        try {
            const response = await this.instance.get('book-products');
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }            
            throw new Error('Query failed');
        }
    }
}