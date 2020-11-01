package com.qa.hubspot.StepDefinitionFiles_BDD;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HooksDemoStepDefinition {
	
	@Before(order=1)
	public void setup() 
	{
	    System.out.println("Launch the browser and open the url and login");
	}
	
	@Before(order=0)
	public void setup1() 
	{
	    System.out.println("Launch the browser and open the url and login and order");
	}

	
	@Before("@Second")
	public void beforeSecond()
	{
		System.out.println("Before only second scenario");
	}

	@Given("^user wants to create a new deal$")
	public void user_wants_to_create_a_new_deal() 
	{
		System.out.println("user wants to create a new deal");
	}

	@Then("^user is on deal page$")
	public void user_is_on_deal_page()
	{
		System.out.println("user is on deal page");
	}

	@And("^user creates a new deal$")
	public void user_creates_a_new_deal()
	{
		System.out.println("user creates a new deal");
	}
	
	@Then("^user verifies the deal created$")
	public void user_verifies_the_deal_created()
	{
		System.out.println("user verifies the deal created");
	}
	
	
	
	@Given("^user wants to create a profile$")
	public void user_wants_to_create_a_profile()
	{
		System.out.println("user wants to create a profile");
	}
	
	@Then("^user should land into the profile page$")
	public void user_should_land_into_the_profile_page()
	{
		System.out.println("user should land into the profile page");
	}
	
	@And("^user needs to delete the current profile$")
	public void user_needs_to_delete_the_current_profile()
	{
		System.out.println("user needs to delete the current profile");
	}
	
	@Then("^user can create a profile$")
	public void user_can_create_a_profile()
	{
		System.out.println("user can create a profile");
	}
	
	@After("@Second")
	public void afterSecond()
	{
		System.out.println("afterSecond");
	}

	@After(order=1)
	public void tearDown()
	{
	    System.out.println("user quits the browser");
	}
	
	@After(order=0)
	public void tearDown1()
	{
	    System.out.println("user quits the browser and order");
	}




}
