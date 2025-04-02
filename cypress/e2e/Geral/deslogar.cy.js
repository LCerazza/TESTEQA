describe('Deslogar', () => {
   it('Deslogar e ser direcionado para a página de login', () => {
      cy.visit('https://www.saucedemo.com/');
      //Realizando login válido
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      //Clicando em Login
      cy.get('[data-test="login-button"]').click()
      //Clicando no Menu
      cy.get('#react-burger-menu-btn').click()
      //Clicando em Logout
      cy.get('[data-test="logout-sidebar-link"]').click()
      //Deve levar para a página inicial de login
      cy.url().should('include', 'https://www.saucedemo.com/')
   });
})