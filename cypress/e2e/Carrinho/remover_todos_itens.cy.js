describe("Validar quantidade no carrinho", () => {
  it("Validando quantidade no carrinho", () => {
    cy.visit("https://www.saucedemo.com/");
    //Logando com usuário e senha válidos
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    //Clicar em Login
    cy.get('[data-test="login-button"]').click();
    //Selecionar preço do maior para menor
    cy.get('[data-test="product-sort-container"]').select(
      "Price (high to low)"
    );
    //Selecionar os três primeiros itens para o carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    //Clicando no carrinho
    cy.get('[data-test="shopping-cart-link"]').click()
    //Removendo os itens do carrinho
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
  });
});
