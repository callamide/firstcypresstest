describe('csslocator test', () =>{
    it('test vtu reg page', () => {
        cy.visit("https://vtu.ng/dashboard/?action=register")
        cy.get('#reg_username').type("callamide")
        cy.get('#reg_email').type('Olayinka@gmail.com')
        cy.get('#reg_password').type('Olayinka@1')
        cy.get('#reg_billing_phone').type('+2347069496565')
        cy.get("[value='Register']") .click ()
    



        
    })



})