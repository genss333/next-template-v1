import "@/components/extensions/string";

describe("String extension", () => {
  test("should be input test to equal Test", () => {
    expect("test".toTitleCase()).toBe("Test");
  });

  test("should not be test", () => {
    expect("test".toTitleCase()).not.toBe("test");
  });
});
