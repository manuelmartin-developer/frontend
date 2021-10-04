import React from "react";
import { render, screen } from "@testing-library/react";
import Feed from ".";

describe("Product", () => {
  test("matches snapshot", () => {
    render(<Feed />);
    expect(screen).toMatchSnapshot();
  });
});
