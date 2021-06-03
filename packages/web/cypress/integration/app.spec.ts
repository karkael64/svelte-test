context("My first test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("launches app", () => {
    cy.get(".storybook-button");
  });
});
