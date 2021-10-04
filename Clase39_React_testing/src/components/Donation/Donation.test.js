import React from "react";
import { render, screen } from "@testing-library/react";
import Donation from ".";

describe("Product", () => {
  test("matches snapshot", () => {
    render(<Donation />);
    expect(screen).toMatchSnapshot();
  });
});
