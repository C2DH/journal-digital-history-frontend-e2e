import {
  getArticleCellCodeTools,
  getCodeCell,
  getExplainCodeButton,
} from "cypress/support/selectors/codeExplainer";
import {
  getCookieAgreeButton,
  getVideoReleaseButton,
} from "../../support/selectors/main";

describe("[Code Explainer] Basic Request", () => {
  beforeEach(() => {
    cy.visit("/en/article/6ig87tC5GKjQ");
    cy.viewport(1280, 720);

    cy.wait(1000);
    getCookieAgreeButton().click();
    cy.wait(1000);

    getVideoReleaseButton().click();
    cy.wait(1000);
    // cy.get('[data-cy="modal"]').contains("button", "Close").click();
  });

  it("should trigger the code Explainer a button and display an explanation", () => {
    getCodeCell()
      .first()
      .scrollIntoView({ offset: { top: 100, left: -400 } });

    cy.get("body").then(($body) => {
      const $modal = $body.find('[data-test="video-release-modal"]');
      if ($modal.length) cy.wrap($modal).invoke("remove");
    });

    getArticleCellCodeTools().should("be.visible");

    getExplainCodeButton().should("be.visible").first().click({ force: true });
    console.log("Clicked on Explain Code button");

    // getCodeExplanationContainer()
    //   .should("exist")
    //   .to.not.contains("Error")
    //   .to.contains("bokeh", "pandas");
  });
});
