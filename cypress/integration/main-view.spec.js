describe("Main View ", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get(".card").eq(1).as("targetcard")
            .find(".card-footer")
            .find("button")
            .as("cardbuttons");
    });

    it("loads the list of points", () => {
        cy.get(".badge").should("contain", 6);
        cy.get(".card").should("have.length", 6);
    });

    describe("Delete operation", () => {
        it("allows a point be deleted", () => {
            cy.get(".badge").should("contain", 6);
            cy.get("@cardbuttons")
                .contains("Delete")
                .click();
            cy.get("@cardbuttons")
                .contains("Confirm")
                .click();
            cy.get(".badge").should("contain", 5);
        });

        it("allows a delete operation be canceled", () => {
            cy.get("@cardbuttons")
                .contains("Delete")
                .click();
            cy.get("@cardbuttons")
                .contains("Cancel")
                .click();
            cy.get(".badge").should("contain", 6);
        });
    });

    describe("Edit operation", () => {
        it("allows a point be edited", () => {
            cy.get("@cardbuttons")
                .contains("Edit")
                .click();
            cy.get("@targetcard")
                .find(".card-body")
                .should("have.css", "background-color")
                .and("eq", "rgba(0, 0, 0, 0)");
            cy.get("@targetcard")
                .find("input")
                .first()
                .clear()
                .type("changeDetails");
            cy.get("@cardbuttons")
                .contains("Save")
                .click();
            cy.get("@targetcard")
                .should("contain", "changeDetails");
        });

        it("allows an edit be cancelled", () => {
            cy.get("@targetcard")
                .invoke("text")
                .then($text => {
                    cy.get("@cardbuttons")
                        .contains("Edit")
                        .click();
                    cy.get("@targetcard")
                        .find("input")
                        .first()
                        .clear()
                        .type("test@example.com");
                    cy.get("@cardbuttons")
                        .contains("Cancel")
                        .click();
                    cy.get("@targetcard")
                        .should("contain", $text);
                });
        });
    });

    describe("Filtering", () => {
        it("filteres the points by name", () => {
            cy.get("span")
                .contains("Filter")
                .next()
                .type("la");
            cy.get(".card").each($el => {
                cy.wrap($el)
                    .find(".card-title")
                    .contains("la");
            });
        });

        it("filters the points by region", () => {
            cy.get('select').then(function($select){
                $select.val('East')
            })
            cy.get('select').should('have.value', 'East')
            cy.get(".card")
                .its("length")
                .then(regions => {
                    cy.get(".card")
                        .its("length")
                });
        });
    });
});