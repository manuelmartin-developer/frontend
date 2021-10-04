import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from ".";
import { BrowserRouter } from 'react-router-dom';

describe("Product", () => {
  test("matches snapshot", () => {
    render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
