export const getCollapseCloseButton = () =>
  cy.get('[data-test="collapse-icon-closed"]');

export const getArticleCellCodeTools = () =>
  cy.get('[data-test="ArticleCellCodeTools"]');

export const getExplainCodeButton = () =>
  cy.get('[data-test="ArticleCellExplainCodeButton"]');

export const getCodeExplanationContainer = () =>
  cy.get('[data-test="ArticleCellExplainer-messages"]');

export const getCodeCell = () => cy.get('[class="ArticleCellCodeTools"]');
