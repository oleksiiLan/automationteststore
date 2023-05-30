/*
describe('Registration and Autorization test', () => {
  it('Registration', () => {
    cy.visit('https://automationteststore.com/')
    
    cy.get('#customernav').click();
    cy.get('#accountFrm button').click();

    cy.get('#AccountFrm_firstname').type('Olexiy91');
    cy.get('#AccountFrm_lastname').type('Lan91');
    cy.get('#AccountFrm_email').type('autotest91@test.com');
    cy.get('#AccountFrm_telephone').type('+380987654321');

    cy.get('select#AccountFrm_country_id').select('Ukraine');
    cy.get('select#AccountFrm_zone_id').select(`L\'viv`); 
    cy.get('#AccountFrm_city').type('Lviv');
    cy.get('#AccountFrm_address_1').type('Rynok Square, 1');
    cy.get('#AccountFrm_postcode').type('79000');

    cy.get('#AccountFrm_loginname').type('Olexiy91');
    cy.get('#AccountFrm_password').type('Olexiy91');
    cy.get('#AccountFrm_confirm').type('Olexiy91');

    cy.get('#AccountFrm_newsletter1').click();
    cy.get('#AccountFrm_agree').click();

    cy.get('.col-md-2.mt20.mb40 button').click();


    cy.get('#maincontainer .maintext').should('have.text',' Your Account Has Been Created!');


    cy.get('#customer_menu_top').click();
    cy.get('.nav-dash li').last().click();
    cy.get('#maincontainer .maintext').should('have.text',' Account Logout');

    cy.get('#customernav li').click();

    //autorization
    cy.get('#loginFrm_loginname').clear().type('Olexiy91');
    cy.get('#loginFrm_password').clear().type('Olexiy91');
    cy.get('#loginFrm button[type="submit"]').click();

    cy.get('.heading1 > span').should(($lis) => {
      expect($lis).to.have.length(2)
      expect($lis.eq(0)).to.contain(' My Account')
      expect($lis.eq(1)).to.contain('Olexiy91')
    })

  })

  // it('Autorization', () => {
  //   cy.get('#loginFrm_loginname').clear().type('Olexiy94');
  //   cy.get('#loginFrm_password').clear().type('Olexiy94');
  //   cy.get('#loginFrm button[type="submit"]').click();
  // });

  // it('Autorization', () => {
  //     cy.visit('https://automationteststore.com/')
  //   })
})
*/