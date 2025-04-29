import {
  getSubmitButton,
  getInput,
  getCheckboxById,
  getAddItemButton,
  getErrorMessageByIdAndField,
  getErrorMessage,
} from "../../support/selectors/abstractSubmissionForm";
import { abstractExample, wrongEmail } from "../../support/fixtures/data";
import {
  getCookieAgreeButton,
  getVideoReleaseButton,
} from "../../support/selectors/main";

describe("[AbstractSubmissionForm] Error messages", () => {
  beforeEach(() => {
    cy.visit("/en/submit");
    cy.get("form").should("be.visible");

    cy.wait(1000);
    getCookieAgreeButton().click();
    cy.wait(1000);
    getVideoReleaseButton().click();
    cy.wait(1000);
  });

  it("should display a global error message", () => {
    getSubmitButton().click();

    getErrorMessage(
      "There are errors in your submission. Please fix them before submitting."
    ).should("exist");
  });

  describe("[Authors] - Error messages", () => {
    beforeEach(() => {
      getAddItemButton("authors").click();

      abstractExample.authors.forEach((author, index) => {
        if (author.primaryContact) {
          getCheckboxById("authors", "primaryContact", index).check();
        }
        getInput("authors", "firstname", index).type(author.firstname);
        getInput("authors", "lastname", index).type(author.lastname);
        getInput("authors", "affiliation", index).type(author.affiliation);
        getInput("authors", "email", index).type(author.email);
        getInput("authors", "orcidUrl", index).type(author.orcidUrl);
        getInput("authors", "blueskyId", index).type(author.blueskyId);
        getInput("authors", "facebookId", index).type(author.facebookId);
      });
    });

    it("should display an error message for no githubId provided at all", () => {
      getSubmitButton().click();
      getErrorMessageByIdAndField("authors", "githubId",0).should("exist");
      getErrorMessageByIdAndField("authors", "githubId",0).should(
        "contain",
        "At least one author must have a valid Github Username"
      );
      getErrorMessageByIdAndField("authors", "githubId",1).should("exist");
      getErrorMessageByIdAndField("authors", "githubId",1).should(
        "contain",
        "At least one author must have a valid Github Username"
      );
    });

    it("should display an error message for mismatching email", () => {
      getInput("authors", "confirmEmail", 1).type(wrongEmail);
      getSubmitButton().click();
      getErrorMessageByIdAndField("authors", "confirmEmail",1).should("exist");
      getErrorMessageByIdAndField("authors", "confirmEmail",1).should(
        "contain",
        "Email addresses do not match"
      );
    });

  });

  describe("[Dataset] - Error messages", () => {
    it("should display an error message for missing dataset description", () => {
      getAddItemButton("datasets").click();

      getInput("datasets", "link", 0).type(abstractExample.datasets[0].link);
      
      getSubmitButton().click();
      getErrorMessageByIdAndField("datasets", "description",0).should("exist");
      getErrorMessageByIdAndField("datasets", "description",0).should(
        "contain",
        "Must be at least 1 character"
      );
    });
  });
});
