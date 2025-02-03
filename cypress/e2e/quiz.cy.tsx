describe('Quiz E2E Test', () => {
  beforeEach(() => {    
    cy.visit('/');
  });

  it('should render the start button initially', () => {
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should display my score when finish the quiz', () => {
    cy.get('button').contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {      
      cy.get('button').contains(1).click();
    }

    cy.get(".alert.alert-success").should('be.visible');

  });  
  

  it('should allow restart the quiz', () => {
    cy.get('button').contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {      
      cy.get('button').contains(1).click();
    }

    cy.get("button").contains('Take New Quiz').click();
    cy.get('.card').should('be.visible');

  });

  it('should display the next question when an answer is clicked', () => {
    cy.get('button').contains('Start Quiz').click();
    
    for (let i = 0; i < 10; i++) {      
      cy.get('button').contains(1).click();
    }

    cy.get('.alert.alert-success').should('be.visible');
  });
});
