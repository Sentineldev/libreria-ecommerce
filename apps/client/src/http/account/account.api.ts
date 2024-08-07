import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from "../api.config";
import StorageUtils from "../../utils/storage";

export default class AccountApi {

    private instance: AxiosInstance;

    constructor() {


        const token = StorageUtils.GetToken();
        this.instance = axios.create({
            baseURL: `${API_URL}/accounts`,
            headers: { Authorization: `Bearer ${token}` }
        })
    }


    async auth(email: string, password: string): Promise<AxiosResponse> {
        try {
            const response = await this.instance.post('/auth', { email, password });
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }            
            throw new Error('Query failed');
        }
    }
}