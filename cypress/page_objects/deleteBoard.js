class DeleteBoard{
    get organization(){
        return cy.get('.vs-c-media__object').eq(1)
    }

    get okBtn1(){
        return cy.get('.vs-c-btn--primary').eq(1)
    }
    
    get board(){
        return cy.get('.vs-c-boards-item__content')
    }

    get configureButton(){
        return cy.get('a[class="vs-c-site-logo"]').eq(8)
    }

    get deleteBtn(){
        return cy.get('.vs-c-btn--warning')   
    }
    get okBtn(){
        return cy.get('.el-button--success').eq(3)
        //button[name="next_btn"]
    }
    

    deleteBoard(boardName){
        this.organization.click()
        this.okBtn1.click()
        this.board.click()
        cy.wait(4000)
        this.configureButton.click()
        this.deleteBtn.click()
        this.okBtn.click()
        
    }
    

}
export const deleteBoard = new DeleteBoard()