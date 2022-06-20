/// <reference types="Cypress" />
import { loginPage} from '../page_objects/login';

describe('login', () => {
    let validEmail = 'ana1@gmail.com'
    let validPassword = '12345'
    before('visit login page', ()=>{
      cy.visit('/')
    })
    it('valid login', ()=>{
      cy.intercept({
         method: 'POST',
          url:'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('validLogin')

        cy.url().should('include', '/login');
        loginPage.login(validEmail, validPassword)
        cy.wait('@validLogin').then(interseption=>{
          expect(interseption.response.statusCode).to.exist
          expect(interseption.response.statusCode).eq(200)
        })
  })

})  
