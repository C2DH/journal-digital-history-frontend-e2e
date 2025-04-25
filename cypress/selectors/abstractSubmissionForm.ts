//TODO : all selectors should be based on data-test

export const getSectionTitle = (title: string) => cy.contains("h3", title);

export const getSubmitButton = () => cy.get('[data-test="button-submit-form"]');
export const getDownloadButton = () =>
  cy.get('[data-test="button-download-as-json-form"]');
export const getAddItemButton = (id: string) =>
  cy.get(`[data-test="button-add-item-${id}"]`);

export const getTextArea = (field: string) =>
  cy.get(`[data-test="form-textarea-${field}"]`);
export const getCheckbox = (id: string, field: string, index: number) =>
  cy.get(`[data-test="form-check-input-${id}-${field}-${index}"]`);
export const getInput = (id: string, field: string, index: number) =>
  cy.get(`[data-test="form-control-${id}-${field}-${index}"]`);

export const getErrorMessage = (message: string) =>
  cy.contains("p.text-error", message);
export const getErrorMessageById = (id: string) =>
  cy.get(`[data-test="error-message-${id}"]`);
export const getErrorMessageByIdAndField = (id: string, field: string) =>
  cy.get(`[data-test="error-message-${id}-${field}"]`);