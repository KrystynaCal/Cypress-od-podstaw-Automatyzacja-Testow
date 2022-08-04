/// <reference types="cypress" />
describe("E2E - Metoda invoke", () => {
    it("invoke", () => {
        cy.visit("/")
        //Pobieranie wartości z danego elementu
        cy.get('[title="Contact Us"]').invoke("text").then(tekst => {cy.log(tekst)
        })

        //Uzyskanie dostepu do wartości atrubutu
        cy.get('[title="Contact Us"]').invoke("attr", "href").then(link => {cy.log(link)
        })

        cy.get('[title="Contact Us"]').invoke("attr", "title").then(title => {cy.log(title)
        })
            //Pobieranie wartości
        cy.get("#search_query_top").type("Przykład").invoke("prop","checked").then(wartosc => 
            {cy.log(wartosc)})
    })


})