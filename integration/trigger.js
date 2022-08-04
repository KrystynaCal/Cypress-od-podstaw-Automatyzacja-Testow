/// <reference types="cypress" />
describe("Scrollowanie/Najechanie", () => {
    it("Najedzie na dany element", () => {
        cy.visit("/")
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")
        cy.get('li.sfHover a[title="Summer Dresses"]').click()
    })

    it("skroluje do boksa special", () => {
        cy.get('[title="Specials"]').first().scrollIntoView();
    })
})