export function login(user) {
  cy.log("Open website login page");
  cy.visit("/index.php?rt=account/login");

  cy.log("Check user is unauthorized");
  cy.getCookie("customer").should("be.null");

  cy.log("Authorize user");
  cy.get("#loginFrm_loginname").type(user.username);
  cy.get("#loginFrm_password").type(user.password);
  cy.get('button[type="submit"]').contains("Login").click();
}

export function findProduct(product) {
  cy.log("Account screen");
  cy.url().should(
    "eq",
    "https://automationteststore.com/index.php?rt=account/account"
  );
  cy.get(".navbar-header.header-logo").click();
  сy.get("#search_form").type("E").and.type("{enter}");

  cy.log("Check user is unauthorized");
  cy.getCookie("customer").should("be.null");
}
// //homwirk#1
//  export function findNewProd(productName){
//     //alias: pages - потрібен для роботи над елементом
//     cy.get('ul.pagination a').then(pages => {//дістали всі елементи пагінації
//         for(let i = 1; i < pages.length; i++){//повтор.й стільки разів скільки сторінок
//             cy.location().then(location => {
//                 if(location.search.includes('product/product'))//якщо ця сторінка то виконується умова
//                 cy.get('body').then(body => {
//                     if (body.find(`.produtname[title="${productName}"]`).length > 0){
//                         cy.get(`.produtname[title="${productName}"]`).click()
//                     } else {
//                         cy.get('ul.pagination a').contains('>').click();
//                     }
//                 })
//             })
//         }
//     })
//  }

//homework#2_рекурсія - findProduct
export function findNewProduct(productName) {
  cy.get("body").then((body) => {
    if (body.find(`.produtname[title="${productName}"]`).length > 0) {
      cy.get(`.produtname[title="${productName}"]`).click();
    } else {
      cy.get("ul.pagination a").contains(">").click();
      findProduct(productName); //виклик функції
    }
  });
}
