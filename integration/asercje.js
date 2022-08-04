/// <reference types="cypress" />
describe("E2E - Asercje", () => {
    it("asercje expect oraz should", () => {
        cy.visit("/")

        //Weryfikacja tekstu
        cy.get('a[title="Contact Us"]').should("contain","Contact us")
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).to.contain("Contact us")
        })

        //sprawdzenie czy nie zawiera tekstu
        cy.get('a[title="Contact Us"]').should("not.contain", "Codfntact us")
        cy.get('a[title="Contact Us"]').then(zakladka => { 
            expect(zakladka).not.to.contain("odfntact us")
        })
        //Weryfikacja czy znacznik posiada klase
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control")
        })

        //Czy element jest widoczny
        cy.get("#search_query_top").should("be.visible");
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
        })

        //Weryfikacja ilości pobranych elementów
        cy.get("ul.sf-menu").find("li").should("have.length", 14)
        cy.get("ul.sf-menu").find("li").then(zakladki => {
            expect(zakladki).to.have.length(14)
        })
    })
})