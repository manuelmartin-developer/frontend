import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import products from '../../data.js'

describe("Product", () => {
  test("matches snapshot", () => {
    render(<Product info={products[0]}/>);
    expect(screen).toMatchSnapshot();
  });
});
