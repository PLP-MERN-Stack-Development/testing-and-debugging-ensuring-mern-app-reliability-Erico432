describe('Auth flow', () => {
  it('registers then logs in', () => {
    cy.visit('/register');
    cy.get('input[placeholder="Email"]').type('cypress@test.com');
    cy.get('input[placeholder="Password"]').type('cypress123');
    cy.get('button').contains('Register').click();
    cy.url().should('include', '/login');

    cy.visit('/login');
    cy.get('input[placeholder="Email"]').type('cypress@test.com');
    cy.get('input[placeholder="Password"]').type('cypress123');
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/todos');
  });
});
