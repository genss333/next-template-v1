import { IDateFormat } from "@/interfaces/dateformat";

declare global {
  interface String {
    capitalizeFirst(): string;

    langCode(): string;
  }

  interface Number {
    toBuddhistCalendar(): number;
  }

  interface Date {
    formatInBuddhistCalendar({ locale, formattedDate }: IDateFormat): string;
  }
}

export { __global };
