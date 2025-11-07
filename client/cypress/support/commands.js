Cypress.Commands.add('login', (email = 'u@x.y', password = 'pass') => {
  cy.request('POST', 'http://localhost:5000/api/auth/login', { email, password })
    .its('body.token')
    .then(t => {
      window.localStorage.setItem('token', t);
    });
});
