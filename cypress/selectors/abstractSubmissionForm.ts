export const getSectionTitle = (title:string) => cy.contains('h3', title)

export const getTextArea = (ref: string) => cy.get(`textarea#${ref}`)

export const getSubmitButton = () => cy.get('button[type="submit"]')
export const getDownloadButton = () => cy.contains('button', 'Download as JSON')
export const getErrorMessage = (message: string) => cy.contains('p.text-error', message)