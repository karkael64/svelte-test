import { fireEvent } from "@testing-library/svelte";
import Button from "./Button.svelte";
import { renderWithEvents } from "../../../../test/renderWithEvents";

describe("Button", () => {
  it("Should instanciate with default values", async () => {
    const label = "inner text";
    const { getByText, container } = renderWithEvents(Button, {
      label,
    });

    const button = getByText(label);
    expect(button).toBeInTheDocument();

    expect(button).toHaveClass("storybook-button");
    expect(button).toHaveClass("storybook-button--medium");
    expect(button).toHaveClass("storybook-button--secondary");

    expect(container).toMatchSnapshot();
  });

  it("Should change size to small", async () => {
    const label = "inner text";
    const { getByText } = renderWithEvents(Button, {
      label,
      size: "small",
    });

    const button = getByText(label);
    expect(button).toHaveClass("storybook-button--small");
  });

  it("Should change size to large", async () => {
    const label = "inner text";
    const { getByText } = renderWithEvents(Button, {
      label,
      size: "large",
    });

    const button = getByText(label);
    expect(button).toHaveClass("storybook-button--large");
  });

  it("Should change size to primary", async () => {
    const label = "inner text";
    const { getByText } = renderWithEvents(Button, {
      label,
      primary: true,
    });

    const button = getByText(label);
    expect(button).toHaveClass("storybook-button--primary");
  });

  it("Should trigger click", async () => {
    const label = "inner text";
    const handleClick = jest.fn();
    const { getByText } = renderWithEvents(
      Button,
      { label },
      { click: handleClick }
    );

    const button = getByText(label);
    await fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
