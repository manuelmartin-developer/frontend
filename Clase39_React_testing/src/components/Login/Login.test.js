import React from "react";
import { render, screen } from "@testing-library/react";
import Login from ".";
import { userContext } from "../../context/userContext"


describe("Login", () => {
  test("matches snapshot", () => {
    const value = {
      user: "user",
      login: (name) => this.user = name,
      logout: () => this.user = ""
    }
    render(
      <userContext.Provider value={value}>
        <Login />
      </userContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
