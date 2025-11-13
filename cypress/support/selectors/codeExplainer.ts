export const getExplainCodeButton = () =>
  cy.get('[data-cy="ArticleCellExplainCodeButton"]');

export const getExplainCodeButtonContainer = (timeout: number) =>
  cy.get(".ArticleCellExplainCodeButton", { timeout });

export const getExplainCodeIconWrapperLoading = () =>
  cy.get(".ArticleCellExplainCodeButton__iconWrapper .CircularLoading");

export const getExplainCodeMessages = () =>
  cy.get(".ArticleCellExplainer__messages");
