import { DateTime } from 'luxon';

export default class DateUtils {
  public static Today(): string {
    return DateTime.local().setZone('America/Caracas').toString().split('T')[0];
  }

  public static TimeStamp(): Date {
    return DateTime.local().setZone('America/Caracas').toJSDate();
  }

  public static Format(date: string): Date {
    return DateTime.fromISO(date).setZone('America/Caracas').toJSDate();
  }
}
