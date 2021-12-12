## Overview
This document includes how to run the Cypress tests for QA technical take-home challenge from Syndio.
I used 'Component Object Model' instad of 'Page Ojbect Model' since 'Component Object Model' is a recommended way by Cypress.
In my current company, we use POM.

### <span style="text-decoration:underline;">Instructions to run the dashboard</span>
You need to run the dashboard application locally.

### 1. Running Dashboard App Locally
To run locally you must first install Node. For the required version see `package.json`. After installing Node and cloning this repo the following commands will get you up and running.
You must be in the root level

1. `npm install` (install the requirements)
2. `npm start` (start the application locally)

### Running Cypress Tests
You must navigate where the `package.json` is currently existing under 'TestAutomation' folder.   

1. `npm install` (This will install Cypress and all the dependencies)
2. There are 2 ways to run Cypress tests.

> ## Using Command Line

1) Navigate to 'TestAutomation' folder.
2) Make sure Dashboard app is running.
3) `npm run syndio` or `npm run sydio-cross`(this will run in Chrome, Firefox, and Edge browsers)

![](https://images.velog.io/images/tobyclaire/post/db83a2a9-9e2e-499c-a58a-d6bfbc30ff96/runSyndio.gif)
> ## Using Cypress Test Runner

1) Navigate to 'TestAutomation' folder.
2) `npm cypress open` (This will open Cypress Test Runner)
3) Click 'Run 4 integration specs' or click an individual test case. (This will open a specified browser)
![](https://images.velog.io/images/tobyclaire/post/1bc322b6-4047-400c-b92d-220d021758a8/SyndioTestRunner.gif)


### <span style="text-decoration:underline;">Test Cases</span>
## UI
* Verify loading dashboard app with expected default/initial values. Dropdown list, Top menus, Demographic Cards, Company Logo etc. (It's NOT specified what a user is supposed to see in the screen with dropdown list's default value, 'CHANGE GROUP')  **(Cypress)**
* Checking Top Menu ('Gender' and 'Race' tabs) functionality. (Activie-Inactive status and how it should work accordingly etc.) **(Cypress)**
* Verify Dropdown list's active status. Make sure it shows all the proper css applied and displayed as expected. **(Cypress)**
* Check Dropdown's 'Options List' functionality. When a user clicks the dropdown lsit, it should open 'Options List' and show all the options available. **(Cypress)**
It should closed when outside of dropdown is clicked. **(Cypress)**
* Verify Dropdown list's functionality to change group/option and make sure that the vaild url and result views. Clicking an option should display the result and url only belongs to that option. **(Cypress)**
* Check the all the spelling in the page. **(Cypress)**
* Verify that the page is responsive. Make sure that a user can see all the contents and also make sure it's aligned properly.(Cypress can test visibility by viewport. However, it doesn't fail the test case even if the contents are out of viewport. So Cypress test + manaul test should be performed together.  Also there are other Cypress extensions for Visual Regression Tests. IPhone-8 and Ipad-2 and desktop are used.) **(Cypress + Manual)**
* Make sure that Dashboard can handle the error correctly and displays the proper error message in a correct place. **(Cypress + Manual)**
* Verify that UI has been implemented based on 'dashboard-spec.png'. Make sure that UI has been implemented with all these CSS properties and values.
(We should have a screenshot for different devices as well. In a real life, I would ask UI designer/devs and make sure that we follow that requirements.) **(Cypress)**

## API
I am aware of that API test is not required for this test. But I thought it's really helpful to quickly run some API tests for sanity check. Also API tests can tell if the issue is not coming from the backend, so I can focus on UI to debug the issues.

* Get Group names & IDs **(Cypress)**
* Get Group by Function **(Cypress)**
* Get Group by Role **(Cypress)**
* Retrieving the data with an incorrect id **(Cypress)**

#### Please note that due to time limit, I didn't implement Race section.(I could build it fromt he mock api.)
#### Also if I had more time, I would read the value from api directly and compare it with UI.


### <span style="text-decoration:underline;">Bugs:</span>

* 'CHANGE GROUP' is not a default value for dropdown list. 'Group by Function' is set to the default value.
* Group by Function option is disabled in a dropdown list. So it can't be clicked.
* Clicking Group by Role displays the content for Group by Function. In a backend, it paased "Group by Function's Id". So url is also incorrectly displayed in Group by Role. It shows "Group by Function's Id" in URL.
* Clicking a tab between 'Gender' and 'Race' doesn't change the Result view 
* Once dropdown list is opened it doesn't close by clicking outside the dropdown list.
* Some contents are not visible or partially visible for some devices like iphone-8 and ipad-2.
* When a user request the page with an incorrect id, the error message is displayed. They are all centered. I checked that they are all used justify-content: center, but it looks like be left justified in the phone.
* There is a typo in Budget card.  'buget' SHOULD READ 'budget'
* Active tab
1) height should be 40px. Actual: 41px
2) background-color should be 'rgb(216, 216, 216)'). Actual: rgb(248, 248, 248)
3) font-size should bb 14px. Actual 18.6667px
* Inactive Tab
1) height should be 40px. Actual: 41px
2) background-color should be 'rgb(242, 242, 242)'). Actual: transparent
3) font-size should bb 14px. Actual 18.6667px
* Tabs component's outline hasn't been implemented.






