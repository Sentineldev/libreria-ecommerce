import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from "./api.config";

export default class AppApi {


    private instance: AxiosInstance;

    constructor(token: string) {
        this.instance = axios.create({
            baseURL: `${API_URL}/app`,
            headers: { Authorization: `Bearer ${token}` }
        })
    }


    async getHello(): Promise<AxiosResponse> {
        try {
            const response = await this.instance.get('');
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }            
            throw new Error('Query failed');
        }
    }
}