package at.schunker.swttddplatewarmer;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.UUID;

import static org.junit.Assert.*;

public class StepDefinitions {

    PlateWarmer plateWarmer; //= new PlateWarmer(10);
    String lastMessage;
    Exception exception;

    @Given("the plate warmer is turned off")
    public void plateWarmerIsTurnedOff() {
        this.plateWarmer = new PlateWarmer(10);
    }

    @When("I turn on the plate warmer")
    public void turnOnPlateWarmer() {
        this.plateWarmer.turnOn();
    }

    @Then("the plate warmer is ready for use")
    public void isPlateWarmerReadyForUse() {
        assertTrue(this.plateWarmer.isReadyForUse());
    }

    @Then("the plate stack is empty")
    public void isPlateStackEmpty() {
        assertTrue(this.plateWarmer.isEmpty());
    }

    @And("the plate warmer is empty")
    public void plateWarmerIsEmpty() {
        while(!this.plateWarmer.isEmpty()){
            try {
                this.plateWarmer.pop();
            } catch (PlateWarmerException ex) {
                System.out.println(ex.getMessage());
                this.exception = ex;
            }
        }
    }

    @And("in the plate warmer are {int} plates")
    public void setPlateWarmerPlates(int plateCount) {
        while (this.plateWarmer.getPlateCount() > plateCount) {
            try {
                this.plateWarmer.pop();
            } catch (PlateWarmerException ex) {
                System.out.println(ex.getMessage());
                this.exception = ex;
            }
        }

        while (this.plateWarmer.getPlateCount() < plateCount) {
            try {
                this.plateWarmer.push(UUID.randomUUID());
            } catch (PlateWarmerException ex) {
                System.out.println(ex.getMessage());
                this.exception = ex;
            }
        }
    }

    @When("I turn off the plate warmer")
    public void turnOffPlateWarmer() {
        try {
            this.plateWarmer.turnOff();
        } catch (PlateWarmerException ex) {
            System.out.println(ex.getMessage());
            this.exception = ex;
        }
    }

    @Then("the plate warmer is out of order")
    public void isPlateWarmerOutOfOrder() {
        assertEquals(PlateWarmer.State.OFF, this.plateWarmer.getState());
    }

    @Then("no plates can be added")
    public void platesCannotBeAdded() {
        Exception ex = assertThrows(PlateWarmerException.class,() -> {
            this.plateWarmer.push(UUID.randomUUID());
        });

        String expectedMessage = "PlateWarmer is turned off";
        String actualMessage = ex.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }

    @And("the plate warmer is not empty")
    public void plateWarmerIsNotEmpty() {
        if (this.plateWarmer.isEmpty()) {
            try {
                this.plateWarmer.push(UUID.randomUUID());
            } catch (PlateWarmerException ex) {
                System.out.println(ex.getMessage());
                this.exception = ex;
            }
        }
    }

    @Then("I receive a notice that the plate warmer is not empty")
    public void plateWarmerNotEmptyMessage() {
        String expectedMessage = "PlateWarmer is not empty";
        String actualMessage = this.exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Then("the plate warmer remains active")
    public void isPlateWarmerActive() {
        assertEquals(PlateWarmer.State.ON, this.plateWarmer.getState());
    }

    @And("the plate warmer is completely filled")
    public void plateWarmerIsFull() {
        while (!this.plateWarmer.isFilled()) {
            try {
                this.plateWarmer.push(UUID.randomUUID());
            } catch (PlateWarmerException ex) {
                System.out.println(ex.getMessage());
                this.exception = ex;
            }
        }
    }

    @When("I add a plate")
    public void addPlateToPlateWarmer() {
        try {
            this.lastMessage = this.plateWarmer.push(UUID.randomUUID());
            return;
        } catch (PlateWarmerException ex) {
            System.out.println(ex.getMessage());
            this.exception = ex;
        }

        if (this.exception.getMessage().contains("PlateWarmer is full")) {
            this.lastMessage = "Addition unsuccessful";
        }
    }

    @Then("{int} plates are in the plate warmer")
    public void verifyPlateCount(int plateCount){
        assertEquals(plateCount, this.plateWarmer.getPlateCount());
    }

    @Then("a {} informs me if the addition was successful")
    public void plateWarmerAdditionSuccessfulMessage(String message) {
        String expectedMessage = message;
        String actualMessage = this.lastMessage;

        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Given("the plate warmer is turned on")
    public void plateWarmerIsTurnedOn() {
        this.plateWarmer = new PlateWarmer(10);
        this.plateWarmer.turnOn();
    }

    @And("the maximum capacity of the plate warmer is 10")
    public void setPlateWarmerCapacity() {
        if (this.plateWarmer.getCapacity() != 10) {
            PlateWarmer newPlateWarmer = new PlateWarmer(10);
            if (this.plateWarmer.getState() == PlateWarmer.State.ON) {
                newPlateWarmer.turnOn();
            }
            this.plateWarmer = newPlateWarmer;
        }
    }

    @When("I remove a plate from the plate warmer")
    public void removePlateFromPlateWarmer() {
        Object plate = null;
        try {
            plate = this.plateWarmer.pop();
        } catch (PlateWarmerException ex) {
            System.out.println(ex.getMessage());
            this.exception = ex;
        }

        if (plate != null) {
            this.lastMessage = "Remove successful";
            return;
        }

        if (this.exception.getMessage().contains("PlateWarmer is empty")) {
            this.lastMessage = "Remove unsuccessful";
        }
    }

    @Then("a {} informs me if the if the removement was successful")
    public void plateWarmerAdditionUnsuccessfulMessage(String notice) {
        String expectedMessage = notice;
        String actualMessage = this.lastMessage;

        assertTrue(actualMessage.contains(expectedMessage));
    }

    @When("I remove a plate to inspect it")
    public void removePlateForInspection() {
        Object plate = null;

        try {
            plate = this.plateWarmer.peek();
        } catch (PlateWarmerException ex) {
            System.out.println(ex.getMessage());
            this.exception = ex;
        }

        if (plate != null) {
            this.lastMessage = "Inspection possible";
            return;
        }

        if (this.exception.getMessage().contains("PlateWarmer is empty")){
            this.lastMessage = "Inspection not possible";
        }
    }

    @Then("a {} informs me if the visual inspection is possible")
    public void plateWarmerVisualInspectionPossible(String notice) {
        String expectedMessage = notice;
        String actualMessage = this.lastMessage;

        assertTrue(actualMessage.contains(expectedMessage));
    }

}
