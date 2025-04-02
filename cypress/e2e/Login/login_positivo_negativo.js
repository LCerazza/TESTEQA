describe('Teste Funcional Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    
    // Campos de usuário e senha válidos
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    //Clicar no botão login
    cy.get('[data-test="login-button"]').click()
    //Verificar se URL me leva para a página principal
    cy.url().should('include', '/inventory')
  })
  
  it('Deve exibir erro de login com usuário inválido e senha válida', () => {
    cy.visit('https://www.saucedemo.com/')    
    //Inserindo um usuário inválido e senha válida
    cy.get('[data-test="username"]').type('standard_user1')
    cy.get('[data-test="password"]').type('secret_sauce') 
    //Clicar no botão login
    cy.get('[data-test="login-button"]').click()
    //Deve aparecer mensagem de erro no login
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
  });

  it('Deve exibir erro de login com usuário válido e senha inválida', () => {
    cy.visit('https://www.saucedemo.com/')
    // Campo usuário válido e senha inválida
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce1') 
    //Clicar no botão login
    cy.get('[data-test="login-button"]').click()
    //Deve aparecer mensagem de erro no login
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
});

  it('Deve exibir erro ao tentar acessar somente com usuário válido', () => {
    cy.visit('https://www.saucedemo.com/')
    //Inserindo usuário válido, sem senha
    cy.get('[data-test="username"]').type('standard_user')
    //Clicar no botão login
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Password is required')
});
   
  it('Deve exibir erro ao tentar acessar somente com usuário inválido', () => {
    cy.visit('https://www.saucedemo.com/')
    //Inserindo usuário inválido, sem senha
    cy.get('[data-test="username"]').type('standard_user1')
    //Clicar no botão login
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Password is required')
   });

  it('Deve exibir erro ao tentar acessar somente com a senha válida', () => {
    cy.visit('https://www.saucedemo.com/')
    //Inserindo apenas a senha válida, sem usuário
    cy.get('[data-test="password"]').type('secret_sauce')
  });

   it('Deve exibir erro ao tentar acessar somente com a senha inválida', () => {
    cy.visit('https://www.saucedemo.com/')   
    //inserindo apenas a senha inválida, sem usuário
    cy.get('[data-test="password"]').type('secret_sauce')
  });


})
