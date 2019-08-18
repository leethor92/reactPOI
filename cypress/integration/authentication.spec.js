describe("User Authentication", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Logs in a valid user", () => {
        cy.get("button")
            .contains("Login")
            .click({force: true});
        cy.url().should("include", "/login");
        cy.get("input[name=username]")
            .clear()
            .type("a@b.com");
        cy.get("input[name=password]")
            .clear()
            .type("test");
        cy.get("button[type=submit]").click();
        cy.url().should("not.include", "/login");
        cy.get("nav")
            .find("ul")
            .contains("a@b.com");
        cy.get("nav")
            .find("ul")
            .find("button")
            .contains("Sign out");
    });

    it("Rejects an invalid user", () => {
        cy.get("button")
            .contains("Login")
            .click({force: true});
        cy.get("input[name=username]")
            .clear()
            .type("invalid@b.com");
        cy.get("input[name=password]")
            .clear()
            .type("test");
        cy.get("button[type=submit]").click();
        cy.url().should("include", "/login");
        cy.get("p").contains("Invalid username/password");
    });

    it("Logs out a user successfully", () => {
        cy.get("button")
            .contains("Login")
            .click({force: true});
        cy.url().should("include", "/login");
        cy.get("input[name=username]")
            .clear()
            .type("a@b.com");
        cy.get("input[name=password]")
            .clear()
            .type("test");
        cy.get("button[type=submit]").click({force: true});
        cy.url().should("not.include", "/login");
        cy.get("nav")
            .find("ul")
            .find("button")
            .contains("Sign out")
            .click({force: true});
        cy.get("nav")
            .find("ul")
            .find("button")
            .contains("Login");
        cy.get("nav")
            .find("ul")
            .contains("a@b.com")
            .should("not.exist");
    });
});