import "@/components/extensions/date-format";
import { DateFormat } from "@/components/extensions/date-format";
import { enUS, th } from "date-fns/locale";

describe("Date Format", () => {
  test("should be this format FullDateTime --/---/--/ --:--", () => {
    const fullDateTime = DateFormat.fullDateTime({ locale: enUS });
    expect(fullDateTime).toBe("--/---/--/ --:--");
  });

  test("should be this format FullDateTime Friday 22 August 2025 14:30", () => {
    const date = new Date(2025, 7, 22, 14, 30);
    const fullDateTime = DateFormat.fullDateTime({ date, locale: enUS });
    expect(fullDateTime).toBe("Friday 22 August 2025 14:30");
  });

  test("should be this format FullDateTime ศุกร์ 22 สิงหาคม 2568 14:30", () => {
    const date = new Date(2025, 7, 22, 14, 30);
    const fullDateTime = DateFormat.fullDateTime({ date, locale: th });
    expect(fullDateTime).toBe("ศุกร์ 22 สิงหาคม 2568 14:30");
  });

  test("should be this format FullDate --/---/--/", () => {
    const fullDate = DateFormat.fullDate({ locale: enUS });
    expect(fullDate).toBe("--/---/--/");
  });

  test("should be this format fullDate Friday 22 August 2025", () => {
    const date = new Date(2025, 7, 22, 14, 30);
    const fullDate = DateFormat.fullDate({ date, locale: enUS });
    expect(fullDate).toBe("Friday 22 August 2025");
  });

  test("should be this format fullDate ศุกร์ 22 สิงหาคม 2568", () => {
    const date = new Date(2025, 7, 22, 14, 30);
    const fullDate = DateFormat.fullDate({ date, locale: th });
    expect(fullDate).toBe("ศุกร์ 22 สิงหาคม 2568");
  });
});
