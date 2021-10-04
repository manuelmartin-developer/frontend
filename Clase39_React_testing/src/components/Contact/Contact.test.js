import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from ".";

describe("Product", () => {
  test("matches snapshot", () => {
    render(<Contact />);
    expect(screen).toMatchSnapshot();
  });
});
