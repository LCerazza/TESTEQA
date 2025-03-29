describe('Realizando uma compra', () => {
   it('Test description', () => {
    cy.visit('https://www.saucedemo.com/')
    
    //Logando com usuário e senha válidos
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    //Clicar em Login
    cy.get('[data-test="login-button"]').click()
    //Selecionar preço do maior para menor
    cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
    //Selecionar os três primeiros itens para o carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    //Clicando no carrinho de compras
    cy.get('[data-test="shopping-cart-link"]').click()
    //Indo para o Checkout
    cy.get('[data-test="checkout"]').click()
    //Colocando informações válidas de endereço
    cy.get('[data-test="firstName"]').type('Lucas')
    cy.get('[data-test="lastName"]').type('Grego')
    cy.get('[data-test="postalCode"]').type('1234567890')
    cy.get('[data-test="continue"]').click()
    //Finalizando a compra
    cy.get('[data-test="finish"]').click()
    //Mensagem de confirmação de compra realizada
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')




});

})