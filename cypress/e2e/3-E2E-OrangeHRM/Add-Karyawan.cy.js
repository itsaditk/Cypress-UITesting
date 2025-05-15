describe('OrangeHRM Add Employee', () => {
  const adminUser = 'Admin';
  const adminPass = 'admin123';
  const employeeFirst = 'Adit';
  const employeeLast = 'Kurniawan';
  const username = 'cvsdsdsd';
  const password = 'Aasdasdd12';

  it('1. Add New Employee - Positive Case', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(adminUser);
    cy.get('[name="password"]').type(adminPass);
    cy.get('[type="submit"]').click();

    cy.contains('PIM').click();
    cy.contains('Add Employee').click();

    cy.get('[name="firstName"]').type(employeeFirst);
    cy.get('[name="lastName"]').type(employeeLast);

    cy.get('.oxd-switch-input').click();
    cy.get('.oxd-form-row').eq(2).find('input').eq(0).type(username);
    cy.get('input[type="password"]').eq(0).type(password);
    cy.get('input[type="password"]').eq(1).type(password);

    cy.get('[type="submit"]').click();

    cy.contains('Personal Details', { timeout: 10000 }).should('be.visible');
    cy.contains(`${employeeFirst} ${employeeLast}`).should('be.visible');
  });

  it('2. Add New Employee - Negative Case (Empty Fields)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(adminUser);
    cy.get('[name="password"]').type(adminPass);
    cy.get('[type="submit"]').click();

    cy.contains('PIM').click();
    cy.contains('Add Employee').click();

    cy.get('[type="submit"]').click();
    cy.contains('Required').should('be.visible');
  });
});
