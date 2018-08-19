import * as enzyme from "enzyme";
import * as React from "react";
import RadioButtonGroup from "./RadioButtonGroup";

const baseProps = {
  onChange: () => {
    return;
  },
  options: [
    {
      id: 1,
      label: "First"
    }
  ],
  value: 1
};

describe("<RadioButtonGroup />", () => {
  it("Display button labels", () => {
    const wrapper = enzyme.shallow(
      <RadioButtonGroup
        {...baseProps}
        options={[{ id: 1, label: "First" }, { id: 2, label: "Second" }]}
        value={2}
      />
    );

    const buttonLabels = wrapper.find("button").map(node => node.text());
    expect(buttonLabels).toContain("First");
    expect(buttonLabels).toContain("Second");
  });

  it("Shows that the second button is selected", () => {
    const wrapper = enzyme.shallow(
      <RadioButtonGroup
        {...baseProps}
        options={[{ id: 1, label: "First" }, { id: 2, label: "Second" }]}
        value={2}
      />
    );
    expect(wrapper.find("button.active").text()).toBe("Second");
  });

  it("Changes the button color", () => {
    const wrapper = enzyme.shallow(
      <RadioButtonGroup {...baseProps} buttonColor="dark" />
    );
    expect(wrapper.find("button.btn-dark")).toHaveLength(1);
  });

  it("Changes the active class", () => {
    const wrapper = enzyme.shallow(
      <RadioButtonGroup {...baseProps} activeClass="custom-active-class" />
    );
    expect(wrapper.find("button.custom-active-class")).toHaveLength(1);
  });

  it("Changes the button group size", () => {
    const wrapper = enzyme.shallow(
      <RadioButtonGroup {...baseProps} buttonSize="sm" />
    );
    expect(wrapper.find(".btn-group-sm")).toHaveLength(1);
  });

  it("Calls onChange with the option clicked", () => {
    const onChange = jest.fn();
    const optionToClick = { id: 1, label: "First" };
    const wrapper = enzyme.shallow(
      <RadioButtonGroup
        {...baseProps}
        onChange={onChange}
        options={[optionToClick, { id: 2, label: "Second" }]}
        value={2}
      />
    );

    wrapper
      .find("button")
      .at(0)
      .simulate("click");

    expect(onChange).toHaveBeenCalledWith(optionToClick);
  });
});
