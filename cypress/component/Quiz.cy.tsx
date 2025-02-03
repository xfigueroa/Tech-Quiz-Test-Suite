import Quiz from '../../client/src/components/Quiz'; 


describe('Quiz Component Tests', () => { 
  beforeEach(() => {

    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
      statusCode: 200,      
    })
  });

  it('should render the start button initially', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz when the start button is clicked', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
   
    cy.get('h2').should('be.visible'); 
  });

  it('should display the next question when an answer is clicked', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();


  
    cy.get('button').contains('1').click();

   
    cy.get('h2').should('be.visible');
  });

  it('should display the score when the quiz is completed', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
 

  
    cy.get('button').contains(1).click();
    cy.get('button').contains(2).click();

  
    cy.get('h2').should('contain', 'Quiz Completed');
    cy.get('.alert.alert-success').should('be.visible');
  });

  it('should allow starting a new quiz after completion', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();   
   
    cy.get('button').contains(1).click();
    cy.get('button').contains(2).click();
 


    cy.get('button').contains('Take New Quiz').click();
    cy.get('h2').should('be.visible');
  });
  
});