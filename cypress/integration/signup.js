describe("Examination - Senior QA", () => {
	it("Test Case #1 - That an invalid email address is rejected.", () => {
		cy.visit("https://signup.velpic.com");
	
		// type an invalid email
		cy.get('[name=email]').type('invalid email')
		
		// click Get Started button
		cy.contains('Get Started').click()
		
		// assert email textbox still exist
		cy.get('[name=email]').should('exist')

	});
	it("Test Case #2 - That a valid email address is accepted.", () => {
		cy.visit("https://signup.velpic.com");
		
		// type a valid email
		cy.get('[name=email]').type('sample@email.com')
		
		// click Get Started button
		cy.contains('Get Started').click()
		
		// assert email textbox should not exist
		cy.get('[name=email]').should('not.exist')
		
		// assert name textbox exists
		cy.get('[name=name]').should('exist')
	});
});