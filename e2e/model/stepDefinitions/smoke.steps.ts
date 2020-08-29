import { Given, Then, When } from 'cucumber';
import { homeFunctions } from 'e2e/model/stepFunctions';
import { CountryList } from 'testData/enums';
import { projectFunctions } from 'e2e/model/stepFunctions/projects.functions';

Given(/^I am on xylect homepage$/, async () => {
  await homeFunctions.launchBasePage();
  await homeFunctions.navigateToCountryHomePage(CountryList.India);
  //gf
});
When(/^I login with "(.*?)" user$/, async (userType: string) => {
  let userCredentials: Map<string, string> = new Map();
  userCredentials = await homeFunctions.getUserCredentials(userType);
  await homeFunctions.userLogin(
    userCredentials.get('username'),
    userCredentials.get('password')
  );
});
Then(/^I validate for successful login$/, async () => {
  await projectFunctions.validateLoggedInUserDetail();
});

Given(/^I am at Project page$/, async () => {
  await projectFunctions.isProjectPage();
});
Then(
  /^I validate pump model count for "(.*?)" and select "(.*?)"$/,
  async (searchTag: string, series: string) => {
    await projectFunctions.searchAndValidatePumpModelQuantity(searchTag, series);
  }
);

Then(/^I verify the language list$/, async () => {
  await projectFunctions.validateLanguageList();
});
