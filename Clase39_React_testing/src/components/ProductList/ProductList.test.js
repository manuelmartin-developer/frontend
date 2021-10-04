import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from ".";
import { userContext } from '../../context/userContext';

describe("ProductList", () => {
  test("matches snapshot", () => {
    const value = {
      user: "user",
      login: (name) => this.user = name,
      logout: () => this.user = ""
    }
    render(
      <userContext.Provider value={value}>
        <ProductList />
      </userContext.Provider>);
    expect(screen).toMatchSnapshot();
  });
});
