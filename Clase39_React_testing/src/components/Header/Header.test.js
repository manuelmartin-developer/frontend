import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";
import { themeContext } from "../../context/themeContext"
import { userContext } from "../../context/userContext"
import { BrowserRouter } from "react-router-dom";


describe("Header", () => {
  test("matches snapshot", () => {
    const value = {
      user: "user",
      login: (name) => this.user = name,
      logout: () => this.user = ""
    }
    const theme = {
      theme: "",
      toggleTheme: () => "dark" === "" ? "dark" : ""
  }
    render(
      <themeContext.Provider value={theme}>
        <userContext.Provider value={value}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        </userContext.Provider>
      </themeContext.Provider>);
    expect(screen).toMatchSnapshot();
  });
});
