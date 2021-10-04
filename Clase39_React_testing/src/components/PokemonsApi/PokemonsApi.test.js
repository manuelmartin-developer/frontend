import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonsApi from ".";

describe("Product", () => {
  test("matches snapshot", () => {
    render(<PokemonsApi />);
    expect(screen).toMatchSnapshot();
  });
});
