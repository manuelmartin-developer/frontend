import React from "react";
import { render, screen } from "@testing-library/react";
import Staff from ".";

describe("Product", () => {
  test("matches snapshot", () => {
    render(<Staff />);
    expect(screen).toMatchSnapshot();
  });
});
