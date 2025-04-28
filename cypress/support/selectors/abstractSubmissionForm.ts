//TODO : all selectors should be based on data-test

export const getSectionTitle = (title: string) => cy.contains("h3", title);

export const getSubmitButton = () => cy.get('[data-test="button-submit-form"]');
export const getDownloadButton = () =>
  cy.get('[data-test="button-download-as-json-form"]');
export const getAddItemButton = (id: string) =>
  cy.get(`[data-test="button-add-item-${id}"]`);

export const getElement = (id: string) => cy.get(`[data-test="${id}"]`);
export const getTextArea = (id: string) =>
  cy.get(`[data-test="form-textarea-${id}"]`);
export const getTextAreaById = (id: string, field:string, index: number) =>
  cy.get(`[data-test="form-textarea-${id}-${field}-${index}"]`);
export const getSelect = (field: string) =>
  cy.get(`[data-test="form-select-${field}"]`);
export const getCheckbox = (id:string) =>
  cy.get(`[data-test="form-checkbox-${id}"]`);
export const getCheckboxById = (id: string, field: string, index: number) =>
  cy.get(`[data-test="form-checkbox-${id}-${field}-${index}"]`);
export const getInput = (id: string, field: string, index: number) =>
  cy.get(`[data-test="form-control-${id}-${field}-${index}"]`);

export const getErrorMessage = (message: string) =>
  cy.contains("p.text-error", message);
export const getErrorMessageById = (id: string) =>
  cy.get(`[data-test="error-message-${id}"]`);
export const getErrorMessageByIdAndField = (id: string, field: string) =>
  cy.get(`[data-test="error-message-${id}-${field}"]`);