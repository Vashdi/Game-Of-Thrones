import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../../App.js";

describe("testing more button", () => {
  test("adding four more characters", async () => {
    render(<App initialLength={4} />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));
    const moreBtn = await screen.findByTestId("footer");
    const user = userEvent.setup();
    await user.click(moreBtn);
    expect(screen.getAllByTestId("full-name")).toHaveLength(8);
  });

  test("adding one last character", async () => {
    render(<App initialLength={52} />);
    const user = userEvent.setup();
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));
    const moreBtn = await screen.findByTestId("footer");
    expect(screen.getAllByTestId("full-name")).toHaveLength(52);
    await user.click(moreBtn);
    expect(screen.getAllByTestId("full-name")).toHaveLength(53);
    expect(screen.getByTestId("footer")).toHaveClass("more-button-disable");
  });
});
