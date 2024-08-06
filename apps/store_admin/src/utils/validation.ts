export default class ValidationsUtils {

    public static IsStringNumber(value: string): boolean {
        return !isNaN(Number(value));
    }

    public static IsNotZero(value: string): boolean {
        return value !== "0";
    }

    public static hasDecimals(value: string, decimals: number): boolean {
        const splitted = value.split(".");
    
        if (splitted.length === 2) {
            if (splitted[1].length <= decimals)  return true;
        }
    
        if (splitted.length === 1) return true;
    
        return false;
    }
} 