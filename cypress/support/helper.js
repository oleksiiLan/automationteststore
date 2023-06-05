export function login(user) {
    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');
  
    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');
  
    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();
}

export function getCategoryLinkAndVisit() {
    cy.request('GET', 'https://search.rozetka.com.ua/ua/search/api/v6/autocomplete/?front-type=xl&country=UA&lang=ua&text=Босоніжки і сандалі для дівчаток').then( response => {
        cy.log(response.body.data.content.records.cats_urls[0].href)

        cy.visit(`${response.body.data.content.records.cats_urls[0].href}`)
    })
}