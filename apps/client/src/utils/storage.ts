export default class StorageUtils {


    private static tokenKey = "auth-token";
    public static SaveToken(token: string) {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
    }

    public static GetToken(): string {

        const data = localStorage.getItem(this.tokenKey);

        if (data) {
            return JSON.parse(data);
        }

        return "";
    }

    public static ClearToken() {

        localStorage.removeItem(this.tokenKey);
    }
}