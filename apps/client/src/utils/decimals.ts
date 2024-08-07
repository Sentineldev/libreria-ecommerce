export default class DecimalsUtils {

    public static RoundTo2Decimals(value: number) {

        return Math.round(value * 100) / 100;
    }
}