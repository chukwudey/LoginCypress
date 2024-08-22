describe('Login  Test Scenarios', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/'); 
  });

  it('Positive Test: Successful login with valid credentials', () => {
    cy.get('#user-name').should('be.visible').type('standard_user')
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    
  });

  it('Negative Test: Failed login with invalid credentials', () => {
  cy.get('#user-name').should('be.visible').type('standard_user');
  cy.get('#password').type('secr_sauce');
  cy.get('#login-button').click();
  cy.get("h3[data-test='error']").should('be.visible');
  cy.get('[data-test="error"]').should('be.visible')
  .and('contain', 'Epic sadface: Username and password do not match any user in this service');
});

})