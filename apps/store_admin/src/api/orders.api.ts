import axios, { AxiosInstance } from "axios";
import { API_URL } from "./var.constant";
import { CreateCommentDto, CreateOrderDto } from "./orders.type";

export default class OrderApi {



    private instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: `${API_URL}/orders`,
        })
    }
    async create(body: CreateOrderDto) {
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

    async update(orderId: string, status: string) {
        try {
            const response = await this.instance.patch(`${orderId}/${status}`)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }

    async addComment(orderId: string,body: CreateCommentDto) {
        try {
            const response = await this.instance.post(`comment/${orderId}`, body)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }

    async getById(orderId: string) {
        try {
            const response = await this.instance.get(`${orderId}`)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }

    async getAll() {
        try {
            const response = await this.instance.get("")
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }

    async getProducts(orderId: string) {
        try {
            const response = await this.instance.get(`${orderId}/products`)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }

    async getComments(orderId: string) {
        try {
            const response = await this.instance.get(`/comments/${orderId}`)
            return response
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }

            throw new Error('Error making query');
        }
    }
}