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

    describe("Upvoting", () => {
        it("increments the upvote count", () => {
            // Upvote the top/first news item twice, from 20 to 22
            cy.get("span.ptr")
                .first()
                .contains("14");
            cy.get("[data-icon=heart]")
                .first()
                .click();
            cy.get("span.ptr")
                .first()
                .contains("15");
            cy.get("[data-icon=heart]")
                .first()
                .click();
            cy.get("span.ptr")
                .first()
                .contains("16");
        });

        it("recomputes the order of the points", () => {
            // Upvote the third (index 2) news item until it moves
            // to 2nd position
            cy.get(".card")
                .eq(2)
                .contains("Tory Island");
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get(".card")
                .eq(0)
                .contains("Tory Island");
        });
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

    describe("Add a new point", () => {
        beforeEach(() => {
            cy.get("input[placeholder=Name]").type("Sample name");
            cy.get("input[placeholder=Details]").type("Sample details");
            cy.get("input[placeholder=latitude]").type("Sample Lat");
            cy.get("input[placeholder=longitude]").type("Sample Long");
            cy.get('[id="category"]').contains('West');
        });
        it("adds a new item with a link", () => {
            cy.get("button[type=submit]").click();
            cy.get(".card")
                .last()
                .contains("Sample name");
        });
        it("adds a new item without a link", () => {
            cy.get("button[type=submit]").click();
            cy.get(".card")
                .last()
                .contains("Sample name")
                .should("not.have.attr", "href");
        });
    });
    describe.only("Navigate to Comment page", () => {
        it("requires a login before showing protected page", () => {
            cy.get(".card")
                .eq(1)
                .contains("Reviews")
                .click();
            cy.url().should("include", "/login");
            cy.get("input[name=username]")
                .clear()
                .type("a@b.com");
            cy.get("input[name=password]")
                .clear()
                .type("test");
            cy.get("button[type=submit]").click();
        });
        it("shows protected page when user already logged-in", () => {
            cy.get("button")
                .contains("Login")
                .click({force: true});
            cy.get("input[name=username]")
                .clear()
                .type("a@b.com");
            cy.get("input[name=password]")
                .clear()
                .type("test");
            cy.get("button[type=submit]").click();
            cy.get(".card")
                .eq(1)
                .contains("Reviews")
                .click();
        });
    });
});

