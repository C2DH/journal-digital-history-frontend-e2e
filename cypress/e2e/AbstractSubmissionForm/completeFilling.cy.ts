import {
  getCookieAgreeButton,
  getVideoReleaseButton,
} from "../../support/selectors/main";
import {
  getSubmitButton,
  getElement,
} from "../../support/selectors/abstractSubmissionForm";
import { abstractExample, abstractFromBackEndExample } from "../../support/fixtures/data";
import { interceptCheckGithubIdCall, fillAbstractSubmissionForm } from "../../support/actions/abstractSubmissionForm";

describe("[AbstractSubmissionForm] Complete Filling", () => {
  beforeEach(() => {
    cy.visit("/en/submit");

    cy.wait(1000);
    getCookieAgreeButton().click();
    cy.wait(1000);
    getVideoReleaseButton().click();
    cy.wait(1000);
  });

  it("should fill the form and submit it successfully", () => {
    interceptCheckGithubIdCall(abstractExample);
    cy.intercept("POST", "/api/submit-abstract/",  {
      statusCode: 201,
      body: abstractFromBackEndExample,
    }).as("submitForm");

    fillAbstractSubmissionForm(abstractExample);
    cy.wait("@checkGithubId");

    getSubmitButton().click();
    cy.wait("@submitForm");

    getElement("side-menu").should("be.visible");
    getElement("header").contains("Congratulations").should("be.visible");
    getElement("summary-button-group").should("be.visible");
    getElement("title").contains(abstractExample.title).should("be.visible");
    getElement("abstract").contains(abstractExample.abstract).should("be.visible");
    getElement("call-for-papers").contains("Open submission").should("be.visible");
    abstractExample.authors.forEach((author) => {
      Object.values(author).forEach((value) => {
        if (typeof value === "string") {
          getElement("authors").contains(value).should("be.visible");
        }
      });
    });
  
    abstractExample.datasets.forEach((dataset) => {
      Object.values(dataset).forEach((value) => {
        getElement("datasets").contains(value).should("be.visible");
      });
    });
    getElement("repository").contains(abstractExample.languagePreference).should("be.visible");
  });

  it("should fill the form and get an error page", () => {   
    interceptCheckGithubIdCall(abstractExample);
    cy.intercept("POST", "/api/submit-abstract/", {
      statusCode: 500,
      body: {
        abstractExample,
      },
      error: {
        message: "Internal Server Error",
      },
    }).as("submitFormError");
 
    fillAbstractSubmissionForm(abstractExample);
    cy.wait("@checkGithubId");

    getSubmitButton().click();
    cy.wait("@submitFormError");

    getElement("error-title").should("be.visible");
    getElement("error-message").should("be.visible");
  });
});
