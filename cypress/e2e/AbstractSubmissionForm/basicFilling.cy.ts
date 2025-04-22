import {
  getDownloadButton,
  getErrorMessage,
  getSectionTitle,
  getSubmitButton,
  getTextArea,
} from "../../selectors/abstractSubmissionForm";

describe("AbstractSubmissionForm", () => {
  beforeEach(() => {
    cy.visit("/en/submit");
  });

  it("should render the AbstractSubmissionForm component", () => {
    cy.get("form").should("be.visible");

    getSectionTitle("Title & Abstract").should("exist");
    getSectionTitle("Authors").should("exist");
    getSectionTitle("Primary contact").should("exist");
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
});
