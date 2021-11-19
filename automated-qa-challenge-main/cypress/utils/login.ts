export const login = (cy: Cypress.Chainable) => {
    const apiUrl = Cypress.env('apiUrl');
    const username = Cypress.env('username');
    const password = Cypress.env('password');
  
    // @ts-ignore
    return cy
      .request('GET', `${apiUrl}/protect`)
      .then((response: Cypress.Response) => {
        return cy.request({
          method: 'POST',
          url: `${apiUrl}/auth/signin`,
          body: { username, password },
          headers: {
            'x-csrf-token': response.body.csrfToken,
          },
        });
      });
  };
  