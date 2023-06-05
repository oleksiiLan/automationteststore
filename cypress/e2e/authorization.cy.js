/// <reference types="cypress"/>

import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
//import user 

it('Authorization', () => {
  homePage.visit();
  homePage.getLoginOrRegisterButton().click();
  loginPage.submitLoginForm('Reid_Jacobi48', 'TestPassword');
})


// it('Authorization', () -> {
//     'given .... home page opened'
//     'when .... getLoginOrRegisterButton clicked'
//     'then .... loginPage opened'
//  })
 