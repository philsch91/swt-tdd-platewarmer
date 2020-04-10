package at.schunker.swttddplatewarmer;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources",
        //glue = "src/test/java",
        glue = {"at.schunker.swttddplatewarmer"},
        //dryRun = true,    //for test only
        dryRun = false,
        strict = true,
        monochrome = true,
        plugin = {"pretty",
            "html:./results/cucumber-pretty",
            "json:./results/cucumber.json",
            "junit:./results/cucumber.xml"})
public class RunCucumberTest {
    //
}
