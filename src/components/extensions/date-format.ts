import "@/components/extensions/buddhist-calendar";
import { IDateFormat } from "@/interfaces/dateformat";

export class DateFormat {
  static fullDateTime({ date, locale }: IDateFormat) {
    if (!date) return "--/---/--/ --:--";

    const formattedDate = "EEEE d MMMM y HH:mm";
    return date.formatInBuddhistCalendar({ formattedDate, locale });
  }

  static dateTime({ date, locale }: IDateFormat) {
    if (!date) return "--/---/--/ --:--";

    const formattedDate = "d MMM y kk:mm";
    return date.formatInBuddhistCalendar({ formattedDate, locale });
  }

  static fullDate({ date, locale }: IDateFormat) {
    if (!date) return "--/---/--/";

    const formattedDate = "EEEE d MMMM y";
    return date.formatInBuddhistCalendar({ formattedDate, locale });
  }

  static monthYear({ date, locale }: IDateFormat) {
    if (!date) return "--/---/--/";

    const formattedDate = "MMM y";
    return date.formatInBuddhistCalendar({ formattedDate, locale });
  }

  static shortDate({ date, locale }: IDateFormat) {
    if (!date) return "--/--/----";
    const formattedDate = "d MMM y";
    return date.formatInBuddhistCalendar({ formattedDate, locale });
  }

  static custom({ date, locale, formattedDate }: IDateFormat) {
    if (!date) return "--/--/----";

    return date.formatInBuddhistCalendar({ date, locale, formattedDate });
  }
}
