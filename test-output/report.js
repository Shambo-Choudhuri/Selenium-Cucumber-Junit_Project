$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/user/Documents/EclipseProjects/DemoSeleniumSessionsWithBDDApproach_Junit/src/main/java/com/qa/hubspot/FeatureFiles_BDD/hooksSample.feature");
formatter.feature({
  "line": 1,
  "name": "Sample Hooks Demonstration",
  "description": "",
  "id": "sample-hooks-demonstration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 569600,
  "status": "passed"
});
formatter.before({
  "duration": 120900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "This is a sample test",
  "description": "",
  "id": "sample-hooks-demonstration;this-is-a-sample-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user wants to create a new deal",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user creates a new deal",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verifies the deal created",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksDemoStepDefinition.user_wants_to_create_a_new_deal()"
});
formatter.result({
  "duration": 194858600,
  "status": "passed"
});
formatter.match({
  "location": "HooksDemoStepDefinition.user_is_on_deal_page()"
});
formatter.result({
  "duration": 338800,
  "status": "passed"
});
formatter.match({
  "location": "HooksDemoStepDefinition.user_creates_a_new_deal()"
});
formatter.result({
  "duration": 329600,
  "status": "passed"
});
formatter.match({
  "location": "HooksDemoStepDefinition.user_verifies_the_deal_created()"
});
formatter.result({
  "duration": 309600,
  "status": "passed"
});
formatter.after({
  "duration": 294800,
  "status": "passed"
});
formatter.after({
  "duration": 337500,
  "status": "passed"
});
formatter.before({
  "duration": 568400,
  "status": "passed"
});
formatter.before({
  "duration": 283000,
  "status": "passed"
});
formatter.before({
  "duration": 453900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "This is for tagged hooks",
  "description": "",
  "id": "sample-hooks-demonstration;this-is-for-tagged-hooks",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user wants to create a profile",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user should land into the profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user needs to delete the current profile",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user can create a profile",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksDemoStepDefinition.user_wants_to_create_a_profile()"
});
formatter.result({
  "duration": 430500,
  "status": "passed"
});
formatter.match({
  "location": "HooksDemoStepDefinition.user_should_land_into_the_profile_page()"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "location": "HooksDemoStepDefinition.user_needs_to_delete_the_current_profile()"
});
formatter.result({
  "duration": 3428800,
  "status": "passed"
});
formatter.match({
  "location": "HooksDemoStepDefinition.user_can_create_a_profile()"
});
formatter.result({
  "duration": 319600,
  "status": "passed"
});
formatter.after({
  "duration": 95600,
  "status": "passed"
});
formatter.after({
  "duration": 255100,
  "status": "passed"
});
formatter.after({
  "duration": 87100,
  "status": "passed"
});
});