import React from "react";
import { render, screen } from "@testing-library/react";
import About from ".";

describe("Product", () => {
  test("matches snapshot", () => {
    render(<About />);
    expect(screen).toMatchSnapshot();
  });
});
