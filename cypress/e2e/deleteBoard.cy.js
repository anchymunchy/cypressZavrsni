/// <reference types="Cypress" />
import { loginPage } from "../page_objects/login";
const faker = require ('@faker-js/faker')
import { deleteBoard } from "../page_objects/deleteBoard";

describe('delete board', ()=> {
    let boardName = faker.random.alpha({ count: 5 });
    let boardId;

    before('login',()=>{
        cy.visit('/')
        loginPage.login('ana1@gmail.com', '12345')
        cy.url().should('not.include', '/login');

    })
    


    it('delete board',()=>{
        cy.intercept({
            method: 'DELETE',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/*'
        }).as('deleteBoard')

        deleteBoard.deleteBoard(boardName)
        cy.wait('@deleteBoard').then(interception => {
            boardId = interception.response.body.id
            expect(interception.response.body.name).not.eq(boardName)
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(200)
            
            
            
          })
    })
})
