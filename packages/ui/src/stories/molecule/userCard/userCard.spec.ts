import UserCard, { User } from "./UserCard.svelte";
import { renderWithEvents } from "../../../../test/renderWithEvents";
import "../../../../test/i18n";

const commonUser: User = {
  name: "User",
  email: "user@email.com",
};

describe("UserCard", () => {
  it("Should instanciate with default values", async () => {
    const { getByText, container } = renderWithEvents(UserCard, {
      user: commonUser,
    });

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
