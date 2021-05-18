import { fireEvent } from "@testing-library/svelte";
import { Button } from "../src/main";
import type { Button as ButtonType } from "../src/main.d";
import { renderWithEvents } from "./renderWithEvents";

describe("Button", () => {
  it("Should instanciate with default values", async () => {
    const label = "inner text";
    const { getByText, component } = renderWithEvents<ButtonType>(Button, {
      label,
    });

    const button = getByText(label);
    expect(button).toBeInTheDocument();

    expect(button).toHaveClass("storybook-button");
    expect(button).toHaveClass("storybook-button--medium");
    expect(button).toHaveClass("storybook-button--secondary");

    expect(component).toMatchSnapshot();
  });

  it("Should change size to small", async () => {
    const label = "inner text";
    const { getByText } = renderWithEvents<ButtonType>(Button, {
      label,
      size: "small",
    });

    const button = getByText(label);
    expect(button).toHaveClass("storybook-button--small");
  });

  it("Should change size to large", async () => {
    const label = "inner text";
    const { getByText } = renderWithEvents<ButtonType>(Button, {
      label,
      size: "large",
    });

    const button = getByText(label);
    expect(button).toHaveClass("storybook-button--large");
  });

  it("Should change size to primary", async () => {
    const label = "inner text";
    const { getByText } = renderWithEvents<ButtonType>(Button, {
      label,
      primary: true,
    });

    const button = getByText(label);
    expect(button).toHaveClass("storybook-button--primary");
  });

  it("Should trigger click", async () => {
    const label = "inner text";
    const handleClick = jest.fn();
    const { getByText } = renderWithEvents<ButtonType>(
      Button,
      { label },
      { click: handleClick }
    );

    const button = getByText(label);
    await fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
