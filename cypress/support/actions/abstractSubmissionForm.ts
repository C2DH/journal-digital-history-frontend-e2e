import { Abstract } from "../interfaces/abstractSubmissionForm";
import {
  getAddItemButton,
  getInput,
  getCheckbox,
  getCheckboxById,
  getTextArea,
  getTextAreaById,
  getSelect,
} from "../selectors/abstractSubmissionForm";

export const interceptCheckGithubIdCall = (data:Abstract) => {
  data.authors.forEach((author) => {
    cy.intercept(
      "GET",
      `/api/submit-abstract/check-github-id/${author.githubId}`,
      {
        statusCode: 200,
      }
    ).as(`checkGithubId`);
  });
};

export const fillAbstractSubmissionForm = (abstractExample: Abstract) => {
  getSelect("callForPapers").click();
  getSelect(`callForPapers-${abstractExample.callForPapers}`).click();

  getTextArea("title").type(abstractExample.title);
  getTextArea("abstract").type(abstractExample.abstract);

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
    getInput("authors", "githubId", index).type(author.githubId);
    getInput("authors", "blueskyId", index).type(author.blueskyId);
    getInput("authors", "facebookId", index).type(author.facebookId);
  });

  getSelect("languagePreference").select(abstractExample.languagePreference);

  getAddItemButton("datasets").click();
  abstractExample.datasets.forEach((dataset, index) => {
    getInput("datasets", "link", index).type(dataset.link);
    getTextAreaById("datasets", "description", index).type(dataset.description);
  });

  getCheckbox("termsAccepted").check();
};
