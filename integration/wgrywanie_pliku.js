/// <reference types="cypress" />
describe("E2E - Wgrywanie pliku", () => {
    it("wgrywa plik do inputa w contact us", () => {
        cy.visit("/index.php?controller=contact")
        cy.get("#fileUpload").attachFile("../fixtures/pomeranian-4753015_1280.jpg")
        cy.get("span.filename").should("contain", "pomeranian-4753015_1280.jpg")
    })
})