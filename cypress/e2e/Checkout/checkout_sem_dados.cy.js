describe("Fazendo Checkout sem alguns dados", () => {
    it('Finalizando Checkout sem os dados', () => {
      cy.visit("https://www.saucedemo.com/");
      //Logando com usuário e senha válidos
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      //Clicar em Login
      cy.get('[data-test="login-button"]').click();
      //Seleciona um produto para o carrinho
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      //Clicando no carrinho
      cy.get('[data-test="shopping-cart-link"]').click()
      //Clicando no Checkout
      cy.get('[data-test="checkout"]').click()
      //Clicando em Continue sem preencher nenhum dado
      cy.get('[data-test="continue"]').click()
      //Deve aparecer uma mensagem de ERRO
      cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
    });
    
    it('Finalizando Checkout somente com o nome', () => {
        cy.visit("https://www.saucedemo.com/");
        //Logando com usuário e senha válidos
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        //Clicar em Login
        cy.get('[data-test="login-button"]').click();
        //Seleciona um produto para o carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        //Clicando no carrinho
        cy.get('[data-test="shopping-cart-link"]').click()
        //Clicando no Checkout
        cy.get('[data-test="checkout"]').click()
        //Preenchendo somente o nome
        cy.get('[data-test="firstName"]').type('Lucas')
        //Clicando em Continue somente com o nome preenchido
        cy.get('[data-test="continue"]').click()
        //Deve aparecer uma mensagem de ERRO
        cy.get('[data-test="error"]').should('have.text', 'Error: Last Name is required')
    });  

    it('Finalizando Checkout somente com nome e sobrenome', () => {
        cy.visit("https://www.saucedemo.com/");
        //Logando com usuário e senha válidos
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        //Clicar em Login
        cy.get('[data-test="login-button"]').click();
        //Seleciona um produto para o carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        //Clicando no carrinho
        cy.get('[data-test="shopping-cart-link"]').click()
        //Clicando no Checkout
        cy.get('[data-test="checkout"]').click()
        //Preenchendo somente com nome e sobrenome
        cy.get('[data-test="firstName"]').type('Lucas')
        cy.get('[data-test="lastName"]').type('Grego')
        //Clicando em Continue somente com o nome e sobrenome preenchido
        cy.get('[data-test="continue"]').click()
        //Deve aparecer uma mensagem de ERRO
        cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required')
        //        
    });
});
  