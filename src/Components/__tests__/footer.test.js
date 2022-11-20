import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../../App.js";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: [
        {
          id: 0,
          firstName: "Daenerys",
          lastName: "Targaryen",
          fullName: "Daenerys Targaryen",
          title: "Mother of Dragons",
          family: "House Targaryen",
          image: "daenerys.jpg",
          imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
        },
        {
          id: 1,
          firstName: "Samwell",
          lastName: "Tarly",
          fullName: "Samwell Tarly",
          title: "Maester",
          family: "House Tarly",
          image: "sam.jpg",
          imageUrl: "https://thronesapi.com/assets/images/sam.jpg",
        },
        {
          id: 2,
          firstName: "Jon",
          lastName: "Snow",
          fullName: "Jon Snow",
          title: "King of the North",
          family: "House Stark",
          image: "jon-snow.jpg",
          imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
        },
        {
          id: 3,
          firstName: "Arya",
          lastName: "Stark",
          fullName: "Arya Stark",
          title: "No One",
          family: "House Stark",
          image: "arya-stark.jpg",
          imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
        },
        {
          id: 4,
          firstName: "Sansa",
          lastName: "Stark",
          fullName: "Sansa Stark",
          title: "Lady of Winterfell",
          family: "House Stark",
          image: "sansa-stark.jpeg",
          imageUrl: "https://thronesapi.com/assets/images/sansa-stark.jpeg",
        },
        {
          id: 5,
          firstName: "Brandon",
          lastName: "Stark",
          fullName: "Brandon Stark",
          title: "Lord of Winterfell",
          family: "House Stark",
          image: "bran-stark.jpg",
          imageUrl: "https://thronesapi.com/assets/images/bran-stark.jpg",
        },
        {
          id: 6,
          firstName: "Ned",
          lastName: "Stark",
          fullName: "Ned Stark",
          title: "Lord of Winterfell",
          family: "House Stark",
          image: "ned-stark.jpg",
          imageUrl: "https://thronesapi.com/assets/images/ned-stark.jpg",
        },
      ],
    }),
  },
}));

describe("testing more button", () => {
  test("adding three more characters", async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));
    const moreBtn = await screen.findByTestId("footer");
    const user = userEvent.setup();
    await user.click(moreBtn);
    expect(screen.getAllByTestId("full-name")).toHaveLength(7);
  });

  test("more button should be disable", async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));
    const moreBtnActive = await screen.findByTestId("footer");
    expect(moreBtnActive).toHaveStyle("cursor:pointer;");
    const user = userEvent.setup();
    await user.click(moreBtnActive);
    const moreBtnDisable = await screen.findByTestId("footer");
    expect(moreBtnDisable).toHaveStyle("cursor:no-drop;");
  });
});
