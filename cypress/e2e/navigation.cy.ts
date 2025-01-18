describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a link with an href attribute containing "about"
      cy.get('a[href*="about"]').click()
   
      // The new url should include "/about" 
      cy.url().should('include', '/about', )

   
      // The new page should contain an h1 with "About"
      cy.get('h1').contains('Test API Routes')

      // cy.get('a[href*="services"]').click()
      // cy.url().should('include', '/services', )
      // cy.get('h2').contains('tell me what do you want')




    })
  })