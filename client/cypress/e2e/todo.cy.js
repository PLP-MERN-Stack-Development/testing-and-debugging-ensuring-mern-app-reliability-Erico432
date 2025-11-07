describe('Todo CRUD', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/todos');
  });

  it('creates a todo', () => {
    cy.get('input[placeholder="New todo"]').type('Cypress todo{enter}');
    cy.contains('Cypress todo').should('exist');
  });
});
