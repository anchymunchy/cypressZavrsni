/// <reference types="Cypress" />
import { loginPage} from '../page_objects/login';
import { addBoard } from '../page_objects/addBoard';
const faker = require ('@faker-js/faker')

describe('add board',()=>{
    let boardId;
    let boardName = faker.random.alpha({ count: 3 });


    before('login',()=>{
        cy.visit('/')
        loginPage.login('ana1@gmail.com', '12345')
        cy.url().should('not.include', '/login');

    })


    it('add board',()=>{
        cy.intercept({
            method: 'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
        }).as('addBoard')

       addBoard.addBoard(boardName);

       cy.wait('@addBoard').then(interception => {
           boardId = interception.response.body.id
           expect(interception.response.body.name).eq(boardName)
           expect(interception.response.statusCode).to.exist
           expect(interception.response.statusCode).eq(201)
       
       })
    })
})      