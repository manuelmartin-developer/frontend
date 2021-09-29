import React from "react";
import { shallow } from "enzyme";
import Donation from "./Donation";

describe("Donation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Donation />);
    expect(wrapper).toMatchSnapshot();
  });
});
