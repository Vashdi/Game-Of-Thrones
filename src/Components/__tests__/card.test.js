import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import CharacterData from "../CharacterCard/CharacterCard.js";
import { daenerysCharacter, wrongData } from "../../utils/consts.js";

describe("test card info", () => {
  test("show full name correctly", () => {
    render(<CharacterData character={daenerysCharacter} />);
    expect(screen.getByTestId("full-name")).toHaveTextContent(
      "Daenerys Targaryen"
    );
  });

  test("should show no name", () => {
    render(<CharacterData character={wrongData} />);
    expect(screen.getByTestId("full-name")).toHaveTextContent("no name");
  });

  test("should show image", () => {
    render(<CharacterData character={daenerysCharacter} />);
    expect(screen.getByTestId("image")).toHaveAttribute("src");
    expect(screen.getByTestId("image")).toHaveAccessibleName("not-exist");
  });

  test("should show image not exist", () => {
    render(<CharacterData character={wrongData} />);
    expect(screen.getByTestId("image")).not.toHaveAttribute("src");
    expect(screen.getByTestId("image")).toHaveAccessibleName("not-exist");
  });

  test("should show correct tooltip", () => {
    render(<CharacterData character={daenerysCharacter} />);
    expect(screen.getByTestId("HelpOutlineIcon")).toHaveAttribute(
      "data-tip",
      "Daenerys Targaryen, Mother of Dragons<br />house: House Targaryen"
    );
  });
});
