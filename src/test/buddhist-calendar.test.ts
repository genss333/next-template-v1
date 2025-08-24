import "@/components/extensions/buddhist-calendar";

describe("Test Buddhist Calendar", () => {
  test("should be 2568", () => {
    const year = 2025;
    expect(year.toBuddhistCalendar()).toBe(2568);
  });
});
