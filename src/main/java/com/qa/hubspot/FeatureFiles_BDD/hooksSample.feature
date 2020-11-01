Feature: Sample Hooks Demonstration

@First
Scenario: This is a sample test

Given user wants to create a new deal

Then user is on deal page

And user creates a new deal

Then user verifies the deal created

@Second
Scenario: This is for tagged hooks 

Given user wants to create a profile

Then user should land into the profile page

And user needs to delete the current profile

Then user can create a profile

