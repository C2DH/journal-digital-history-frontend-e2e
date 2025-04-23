import { accentColor, errorColor } from "../../fixtures/colors";
import {
  getErrorMessage,
  getMessageAtLeastOneGithubId,
  getSubmitButton,
  getTextArea,
  getInput,
  getCheckbox,
  getAddItemButton,
  getErrorMessageByIdAndField,
} from "../../selectors/abstractSubmissionForm";
import { abstractExample, wrongEmail } from "../../fixtures/data";
import {  getCookieAgreeButton, getVideoReleaseButton } from "../../selectors/main";

describe("[AbstractSubmissionForm] Error messages", () => {
  beforeEach(() => {
    cy.visit("/en/submit");
    cy.get("form").should("be.visible");

    cy.wait(500);
    getCookieAgreeButton().click();
    cy.wait(500);
    getVideoReleaseButton().click();

    getTextArea("title").type(abstractExample.title);
    getTextArea("abstract").type(abstractExample.abstract);

    getAddItemButton("authors").click();

    abstractExample.authors.forEach((author, index) => {
      getInput("authors", "firstname", index).type(author.firstname);
      getInput("authors", "lastname", index).type(author.lastname);
      getInput("authors", "affiliation", index).type(author.affiliation);
      getInput("authors", "email", index).type(author.email);
      getInput("authors", "orcidUrl", index).type(author.orcidUrl);
      getInput("authors", "blueskyId", index).type(author.blueskyId);
      getInput("authors", "facebookId", index).type(author.facebookId);

      if (author.primaryContact) {
        getCheckbox("authors", "primaryContact", index).check();
      }
    });
  });

  it("should render 'at least one GitHub ID' message in red", () => {
    getMessageAtLeastOneGithubId().should("exist");
    getMessageAtLeastOneGithubId().should("have.css", "color", accentColor);
    getSubmitButton().click();
    getMessageAtLeastOneGithubId().should("have.css", "color", errorColor);
  });

  it("should display an error message for confirmEmail when it is invalid", () => {
    getInput("contact", "confirmEmail", 0).type(wrongEmail);
    getSubmitButton().click();
    getErrorMessageByIdAndField("contact", "confirmEmail").should("exist");
    getErrorMessageByIdAndField("contact", "confirmEmail").should(
      "contain",
      "Email addresses do not match"
    );
  });
});
