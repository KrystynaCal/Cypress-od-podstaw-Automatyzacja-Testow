/// <reference types="cypress" />
describe("E2E - Home Page", () => {
    it("Should open home page - automationpractice", () => {
        cy.visit("/")

        //Po znaczniku
        cy.get("a");

        //Identyfikator
        cy.get("#search_query_top")
        
        //Po klasie
        cy.get(".form-control")

        //Po atrubutach
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        // Dokładniejszy atrybut wraz z podaniem znacznika
        cy.get('input[placeholder="Search"]')

        //Pobieranie elementów po kilku atrybutach
        cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //Zalecana praktyka pobierania elementów
    })
    it.only("Lokalizatory część 2", () => {
        cy.visit("/");
        cy.contains("Shop now !")
        cy.contains('[title="Contact Us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").eq(1);
        cy.get("li").parents("#home-page-tabs").find("li").first();
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers");
    })
})