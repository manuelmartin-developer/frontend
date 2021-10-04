import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from ".";
import { userContext } from '../../context/userContext';


describe("Main", () => {
  test("matches snapshot", () => {
    const value = {
      user: "user",
      login: (name) => this.user = name,
      logout: () => this.user = ""
    }
    render(
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Main />
        </userContext.Provider>
      </BrowserRouter>
    );
      expect(screen).toMatchSnapshot();
  });
});
