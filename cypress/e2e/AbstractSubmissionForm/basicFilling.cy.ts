import {
  getCheckbox,
  getDownloadButton,
  getErrorMessage,
  getInput,
  getSectionTitle,
  getSubmitButton,
  getTextArea,
} from "../../selectors/abstractSubmissionForm";
import { getCookieAgreeButton, getVideoReleaseButton } from "../../selectors/main";

describe("[AbstractSubmissionForm] Basic Filling", () => {
  beforeEach(() => {
    cy.visit("/en/submit");

    cy.wait(500);
    getCookieAgreeButton().click();
    cy.wait(500);
    getVideoReleaseButton().click();
    
  });

  it("should render the AbstractSubmissionForm component", () => {
    cy.get("form").should("be.visible");

    getSectionTitle("Title & Abstract").should("exist");
    getSectionTitle("Authors").should("exist");
    getSectionTitle("Repository").should("exist");
    getSectionTitle("Tools, Code & Data").should("exist");

    getSubmitButton().should("exist");

    getDownloadButton().should("exist");
  });

  it("should allow filling out the title and abstract fields", () => {
    getTextArea("title").type("My Abstract Title");
    getTextArea("title").should("have.value", "My Abstract Title");

    getTextArea("abstract").type("This is the content of my abstract.");
    getTextArea("abstract").should(
      "have.value",
      "This is the content of my abstract."
    );
  });

  it("should display an error message if the form is submitted without required fields", () => {
    getSubmitButton().click();

    getErrorMessage(
      "There are errors in your submission. Please fix them before submitting."
    ).should("exist");
  });

  it("should make appear the confirm email input if checkbox 'use this authors as primary contact' is checked", () => {
    getInput("authors", "firstname", 0).type("John");
    getInput("authors", "lastname", 0).type("Doe");
    getInput("authors", "affiliation", 0).type("University of Test");
    getInput("authors", "email", 0).type("johndoe@example.com");
    getInput("authors", "orcidUrl", 0).type(
      "https://orcid.org/0000-0000-0000-0000"
    );
    getInput("authors", "githubId", 0).type("johndoe");

    getCheckbox("authors", "primaryContact", 0).check();

    getCheckbox("authors", "primaryContact", 0).should("be.checked");
    getInput("authors", "confirmEmail", 0).should("exist");
  });
});
