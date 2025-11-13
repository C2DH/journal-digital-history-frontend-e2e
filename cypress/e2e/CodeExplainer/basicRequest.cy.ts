import {
  getCookieAgreeButton,
  getVideoReleaseButton,
} from "../../support/selectors/main";

import {
  getExpainCodeButtonContainer,
  getExplainCodeButton,
  getExplainCodeIconWrapperLoading,
  getExplainCodeMessages,
} from "../../support/selectors/codeExplainer";

describe("ArticleCellExplainCodeButton E2E", () => {
  beforeEach(() => {
    cy.visit("/en/article/6ig87tC5GKjQ");
    cy.viewport(1280, 720);

    cy.wait(1000);
    getCookieAgreeButton().click();
    cy.wait(1000);

    getVideoReleaseButton().click();
    cy.wait(1000);
  });

  it("renders with idle status by default", () => {
    getExpainCodeButtonContainer(0).should("exist").and("have.class", "idle");

    getExplainCodeButton()
      .should("exist")
      .should("contain", "Explain")
      .and("not.be.disabled");
  });

  it("shows loading state when status is loading", () => {
    getExplainCodeButton().first().click();

    getExpainCodeButtonContainer(0).should("contain", "Thinking …");
    getExplainCodeButton().should("be.disabled");
    getExplainCodeIconWrapperLoading().should("be.visible");
  });

  it("shows success state after explanation is ready", () => {
    getExplainCodeButton().first().click();

    getExpainCodeButtonContainer(10000).should("have.class", "success");
    getExplainCodeButton().should("contain", "Explain code");
  });

  it("shows error state if explanation fails", () => {
    cy.intercept("POST", "/api/explain", { statusCode: 500 }).as(
      "explainError"
    );

    getExplainCodeButton().first().click();
    cy.wait("@explainError");

    getExplainCodeMessages().should("have.class", "error");
  });
});
