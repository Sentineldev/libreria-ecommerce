import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from "../api.config";
import StorageUtils from "../../utils/storage";
import { CreateCommentDto, CreateOrderDto } from "./orders.dto";

export default class    OrdersApi {


    private instance: AxiosInstance;

    constructor() {

        const token = StorageUtils.GetToken();
        this.instance = axios.create({
            baseURL: `${API_URL}/orders`,
            headers: { Authorization: `Bearer ${token}` }
        })
    }



    async createOrder(order: CreateOrderDto) {
        try {
            const response = await this.instance.post(``, order);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }            
            throw new Error('Query failed');
        }
    }

    async getOrders(accountId: string): Promise<AxiosResponse> {
        try {
            const response = await this.instance.get(`by-account/${accountId}`);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }            
            throw new Error('Query failed');
        }
    }
    async getById(orderId: string): Promise<AxiosResponse> {
        try {
            const response = await this.instance.get(`${orderId}`);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }            
            throw new Error('Query failed');
        }
    }
    async getProducts(orderId: string): Promise<AxiosResponse> {
        try {
            const response = await this.instance.get(`${orderId}/products`);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }            
            throw new Error('Query failed');
        }
    }

    async getComments(orderId: string): Promise<AxiosResponse> {
        try {
            const response = await this.instance.get(`comments/${orderId}`);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }            
            throw new Error('Query failed');
        }
    }

    async addComment(orderId: string,body: CreateCommentDto) {
        try {
            const response = await this.instance.post(`comment-customer/${orderId}`, body)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }
}