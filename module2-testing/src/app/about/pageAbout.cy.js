import About from "./page";

describe("<About />", () => {
  beforeEach(() => {
    cy.mount(<About />);
  });

  it("should display header", () => {
    cy.get(`h1[data-test-id="header"]`).should("contain.text", "about page");
  });

  it("should diplay link back to homepage", () => {
    cy.get(`a[data-test-id="link-homepage"]`)
      .should("be.visible")
      .should("have.attr", "href", "/");
  });
});
