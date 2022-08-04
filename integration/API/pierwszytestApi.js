/// <reference types="cypress" />
describe("E2E - Testy Api", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })


    it("weryfikacja tagów API", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).to.contain("welcome").and.to.contain("implementations");
        })
    })

    it("niepoprawne logowanie", function() {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestlogin");
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("test1234@.pl", "1234");
        cy.wait("@requestlogin");
        cy.get("@requestlogin").then(res =>{
            console.log(res)
            expect(res.response.statusCode).to.equal(403);
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403);
           
        })
    })
})