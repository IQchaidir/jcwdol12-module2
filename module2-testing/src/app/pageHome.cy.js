import Home from "./page";

describe("<Home />", () => {
  beforeEach(() => {
    cy.mount(<Home />);
  });

  it("should render the page", () => {
    cy.get("body").should("be.visible");
  });

  it("should render header title", () => {
    cy.get(`h1[data-test-id="header"]`)
      .contains("Homepage")
      .should("be.visible");
  });

  it("it should render link to about page", () => {
    cy.get(`a[data-test-id="link-about"]`)
      .should("be.visible")
      .should("have.attr", "href", "/about");
  });
});
