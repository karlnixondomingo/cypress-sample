describe("Examination - Senior QA", () => {
	it("Test Case #1 - That an invalid email address is rejected.", () => {
		cy.visit("https://signup.velpic.com");
		cy.get('[name=email]').type('invalid email')
		cy.contains('Get Started').click()
		cy.get('[class=form-control-feedback]').contains('Please check that your email address is entered correctly').should('exist')

	});
	it("Test Case #2 - That a valid email address is accepted.", () => {
		cy.visit("https://signup.velpic.com");
		cy.get('[name=email]').type('sample@email.com')
		cy.contains('Get Started').click()
		cy.get('[name=name]').should('exist')
		cy.get('[name=phonenumber]').should('exist')
	});
});