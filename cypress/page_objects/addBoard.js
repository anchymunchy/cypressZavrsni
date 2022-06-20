class AddBoard{
    get organization(){
        return cy.get('.vs-c-media__object').eq(1)
    }

    get okBtn(){
        return cy.get('.vs-c-btn--primary').eq(1)
    }
    
    get addNewBoard(){
        return cy.get('.vs-c-media')
    }
    get boardTitle(){
        return cy.get('input[name="name"]')
    }
    get nextBtn(){
        return cy.get('button[name="next_btn"]')
    }
    get scrumBtn(){
        return cy.get('.vs-c-radio-check').eq(0)
    }

   
    get boardLogoNext(){
        return cy.get('button[name="next_btn"]')
    }
    get finishBtn(){
        return cy.get('.el-button--success').eq(1)
    }

    addBoard(boardName){
        this.organization.click()
        this.okBtn.click()
        this.addNewBoard.click()
        this.boardTitle.type(boardName)
        this.nextBtn.click()
        this.scrumBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.boardLogoNext.click()
        this.finishBtn.click()

    }

}
export const addBoard = new AddBoard()