/// <reference types="cypress"/>

describe.skip("Registration and Autorization test", () => {
  it("Test", () => {
    cy.visit("https://automationteststore.com/");

    //testdata.json
    cy.fixture("testdata.json").then((testdata) => {
      for (let i = 111; i <= 113; i++) {
        const newUser = {
          firstname: testdata.firstname + i,
          lastname: testdata.lastname + i,
          email: testdata.email + i,
        };

        cy.get("#customer_menu_top > li").click();
        //cy.wait(5000)
        cy.get("#accountFrm button").click();
        cy.url().should(
          "eq",
          "https://automationteststore.com/index.php?rt=account/create"
        );

        //create account form
        cy.log("Your Personal Details section");
        cy.get("#AccountFrm_firstname").type(newUser.firstname);
        cy.get("#AccountFrm_lastname").type(newUser.lastname);
        cy.get("#AccountFrm_email").type(`${newUser.email}@test.com`);
        cy.get("#AccountFrm_telephone").type("+380987654321");

        cy.log("Your Address section");
        cy.get("select#AccountFrm_country_id").select("Ukraine");
        cy.get("select#AccountFrm_zone_id").select(`L\'viv`);
        cy.get("#AccountFrm_city").type("Lviv");
        cy.get("#AccountFrm_address_1").type("Rynok Square, 1");
        cy.get("#AccountFrm_postcode").type("79000");

        cy.log("Login Details section");
        cy.get("#AccountFrm_loginname").type(newUser.firstname);
        cy.get("#AccountFrm_password").type(newUser.firstname);
        cy.get("#AccountFrm_confirm").type(newUser.firstname);

        cy.get("#AccountFrm_newsletter1").click();
        cy.get("#AccountFrm_agree").click();

        //created account 
        cy.log("Success");
        cy.get(".col-md-2.mt20.mb40 button").click();
        cy.url().should(
          "eq",
          "https://automationteststore.com/index.php?rt=account/success"
        );
        cy.get("#maincontainer .maintext").should(
          "have.text",
          " Your Account Has Been Created!"
        );

        //logout from created account
        cy.get("#customer_menu_top").click();
        cy.get(".nav-dash li").last().click();
        cy.get("#maincontainer .maintext").should(
          "have.text",
          " Account Logout"
        );
        cy.get("#customernav li").click();

        //autorization to the created account
        cy.log("Autorization");
        cy.url().should(
          "eq",
          "https://automationteststore.com/index.php?rt=account/login"
        );
        cy.get("#loginFrm_loginname").clear().type(newUser.firstname);
        cy.get("#loginFrm_password").clear().type(newUser.firstname);
        cy.get('#loginFrm button[type="submit"]').click();

        cy.get(".heading1 > span").should(($lis) => {
          expect($lis).to.have.length(2);
          expect($lis.eq(0)).to.contain(" My Account");
          expect($lis.eq(1)).to.contain(newUser.firstname);
        });
        cy.get(".nav-dash li").last().click();
      }
    });
  });
});



describe("Registration and Autorization test", () => {
  for (let i = 88; i <= 90; i++) {

    it(`Registration: Olexiy${i}`, () => {
      cy.visit("https://automationteststore.com/");
      cy.get("#customer_menu_top > li").click();
      cy.get("#accountFrm button").click();
      cy.url().should("eq","https://automationteststore.com/index.php?rt=account/create");
      //create account form
      cy.log("Your Personal Details section");
      cy.get("#AccountFrm_firstname").type(`Olexiy${i}`);
      cy.get("#AccountFrm_lastname").type(`Lan${i}`);
      cy.get("#AccountFrm_email").type(`testmail${i}@test.com`);
      cy.get("#AccountFrm_telephone").type("+380987654321");
  
      cy.log("Your Address section");
      cy.get("select#AccountFrm_country_id").select("Ukraine");
      cy.get("select#AccountFrm_zone_id").select(`L\'viv`);
      cy.get("#AccountFrm_city").type("Lviv");
      cy.get("#AccountFrm_address_1").type("Rynok Square, 1");
      cy.get("#AccountFrm_postcode").type("79000");
  
      cy.log("Login Details section");
      cy.get("#AccountFrm_loginname").type(`Olexiy${i}`);
      cy.get("#AccountFrm_password").type(`Olexiy${i}`);
      cy.get("#AccountFrm_confirm").type(`Olexiy${i}`);
  
      cy.get("#AccountFrm_newsletter1").click();
      cy.get("#AccountFrm_agree").click();
  
      //created account 
      cy.log("Success");
      cy.get(".col-md-2.mt20.mb40 button").click();
      cy.url().should("eq","https://automationteststore.com/index.php?rt=account/success");
      cy.get("#maincontainer .maintext").should(
      "have.text",
      " Your Account Has Been Created!"
      );
  
      //logout from created account
      cy.get("#customer_menu_top").click();
      cy.get(".nav-dash li").last().click();
      cy.get("#maincontainer .maintext").should(
      "have.text",
      " Account Logout"
      );
      //cy.get("#customernav li").click();
    })


    it(`Autorization: Olexiy${i}`, () => {
      //autorization to the created account
      cy.log("Autorization");
      cy.visit('https://automationteststore.com/index.php?rt=account/login')
      cy.url().should(
      "eq",
      "https://automationteststore.com/index.php?rt=account/login"
      );
      cy.get("#loginFrm_loginname").clear().type(`Olexiy${i}`);
      cy.get("#loginFrm_password").clear().type(`Olexiy${i}`);
      cy.get('#loginFrm button[type="submit"]').click();
  
      cy.get(".heading1 > span").should(($lis) => {
        expect($lis).to.have.length(2);
        expect($lis.eq(0)).to.contain(" My Account");
        expect($lis.eq(1)).to.contain(`Olexiy${i}`);
      });
      //cy.get(".nav-dash li").last().click();
    })
  }
})
