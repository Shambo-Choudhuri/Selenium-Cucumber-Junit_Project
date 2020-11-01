package com.qa.hubspot.MyRunner_BDD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions 
(
	features="C:\\Users\\user\\Documents\\EclipseProjects\\DemoSeleniumSessionsWithBDDApproach_Junit\\src\\main\\java\\com\\qa\\hubspot\\FeatureFiles_BDD\\hooksSample.feature",
	glue= {"com.qa.hubspot.StepDefinitionFiles_BDD"},
	format={"pretty","html:test-output","json:json-output/cucumber.json"},
	monochrome=true,
	strict=true,
	dryRun=false,
	tags= {"@RegressionTest" , "~@SmokeTest"}
)

public class TestRunner {
	
	

}
