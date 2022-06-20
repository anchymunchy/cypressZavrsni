class LoginPage{
    get emailInput(){
        return cy.get('.el-input').eq(0)
    }

    get passwordInput(){
        return cy.get('.el-input').eq(1)
    }

    get loginButton(){
        return cy.get('.vs-u-text--left')
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.loginButton.click()
    }
}
export const loginPage = new LoginPage()