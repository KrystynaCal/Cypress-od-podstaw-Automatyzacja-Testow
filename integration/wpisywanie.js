/// <reference types="cypress" />
describe("E2E -Akcja wpisywania ", () => {
    it("wpisywanie wartości w pole", () => {
        cy.visit("/")
        cy.get("#search_query_top").type("Summer dressY{backspace}{enter}", {delay: 1000})
    })

    it("czyści wartość z pola input", () => {
        cy.get("#search_query_top").clear();
    })
})