import { createInfo } from "../../utils/helpers.js";

describe("create info", () => {
  test("create info for tooltip", () => {
    const info = createInfo(
      "Daenerys Targaryen",
      "Mother of Dragons",
      "House Targaryen"
    );
    expect(info).toEqual(
      "Daenerys Targaryen, Mother of Dragons<br />house: House Targaryen"
    );
  });
});
