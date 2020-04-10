$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/at/schunker/swttddplatewarmer/platewarmer_capacity_management.feature");
formatter.feature({
  "name": "PlateWarmer Capacity Management",
  "description": "  The capacity of the plates should managed correctly",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Turn on plate warmer",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the plate warmer is turned off",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I turn on the plate warmer",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.turnOnPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the plate warmer is ready for use",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.isPlateWarmerReadyForUse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the plate stack is empty",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.isPlateStackEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Turn off empty plate warmer",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the plate warmer is empty",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I turn off the plate warmer",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.turnOffPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the plate warmer is out of order",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.isPlateWarmerOutOfOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no plates can be added",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.platesCannotBeAdded()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Turn off non empty plate warmer",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the plate warmer is not empty",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I turn off the plate warmer",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.turnOffPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive a notice that the plate warmer is not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerNotEmptyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the plate warmer remains active",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.isPlateWarmerActive()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Turn off filled plate warmer",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the plate warmer is completely filled",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsFull()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I turn off the plate warmer",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.turnOffPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive a notice that the plate warmer is not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerNotEmptyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the plate warmer remains active",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.isPlateWarmerActive()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.step({
  "name": "in the plate warmer are \u003cCountOfPlates\u003e plates",
  "keyword": "And "
});
formatter.step({
  "name": "I add a plate",
  "keyword": "When "
});
formatter.step({
  "name": "\u003cNewCountOfPlates\u003e plates are in the plate warmer",
  "keyword": "Then "
});
formatter.step({
  "name": "a \u003cNotice\u003e informs me if the addition was successful",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CountOfPlates",
        "NewCountOfPlates",
        "Notice"
      ]
    },
    {
      "cells": [
        "0",
        "1",
        "Addition successful"
      ]
    },
    {
      "cells": [
        "8",
        "9",
        "Addition successful"
      ]
    },
    {
      "cells": [
        "9",
        "10",
        "Addition successful"
      ]
    },
    {
      "cells": [
        "10",
        "10",
        "Addition unsuccessful"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 0 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a plate",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.addPlateToPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1 plates are in the plate warmer",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.verifyPlateCount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Addition successful informs me if the addition was successful",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerAdditionSuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 8 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a plate",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.addPlateToPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "9 plates are in the plate warmer",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.verifyPlateCount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Addition successful informs me if the addition was successful",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerAdditionSuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 9 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a plate",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.addPlateToPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "10 plates are in the plate warmer",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.verifyPlateCount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Addition successful informs me if the addition was successful",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerAdditionSuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 10 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a plate",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.addPlateToPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "10 plates are in the plate warmer",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.verifyPlateCount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Addition unsuccessful informs me if the addition was successful",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerAdditionSuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Remove plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.step({
  "name": "in the plate warmer are \u003cCountOfPlates\u003e plates",
  "keyword": "And "
});
formatter.step({
  "name": "I remove a plate from the plate warmer",
  "keyword": "When "
});
formatter.step({
  "name": "\u003cNewCountOfPlates\u003e plates are in the plate warmer",
  "keyword": "Then "
});
formatter.step({
  "name": "a \u003cNotice\u003e informs me if the if the removement was successful",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CountOfPlates",
        "NewCountOfPlates",
        "Notice"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "Remove unsuccessful"
      ]
    },
    {
      "cells": [
        "1",
        "0",
        "Remove successful"
      ]
    },
    {
      "cells": [
        "2",
        "1",
        "Remove successful"
      ]
    },
    {
      "cells": [
        "10",
        "9",
        "Remove successful"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Remove plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 0 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove a plate from the plate warmer",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.removePlateFromPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0 plates are in the plate warmer",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.verifyPlateCount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Remove unsuccessful informs me if the if the removement was successful",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerAdditionUnsuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 1 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove a plate from the plate warmer",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.removePlateFromPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0 plates are in the plate warmer",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.verifyPlateCount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Remove successful informs me if the if the removement was successful",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerAdditionUnsuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 2 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove a plate from the plate warmer",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.removePlateFromPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "1 plates are in the plate warmer",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.verifyPlateCount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Remove successful informs me if the if the removement was successful",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerAdditionUnsuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove plate",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 10 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove a plate from the plate warmer",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.removePlateFromPlateWarmer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "9 plates are in the plate warmer",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.verifyPlateCount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Remove successful informs me if the if the removement was successful",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerAdditionUnsuccessfulMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Visual inspection",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.step({
  "name": "in the plate warmer are \u003cCountOfPlates\u003e plates",
  "keyword": "And "
});
formatter.step({
  "name": "I remove a plate to inspect it",
  "keyword": "When "
});
formatter.step({
  "name": "a \u003cNotice\u003e informs me if the visual inspection is possible",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CountOfPlates",
        "Notice"
      ]
    },
    {
      "cells": [
        "0",
        "Inspection not possible"
      ]
    },
    {
      "cells": [
        "1",
        "Inspection possible"
      ]
    },
    {
      "cells": [
        "10",
        "Inspection possible"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Visual inspection",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 0 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove a plate to inspect it",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.removePlateForInspection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Inspection not possible informs me if the visual inspection is possible",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerVisualInspectionPossible(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Visual inspection",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 1 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove a plate to inspect it",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.removePlateForInspection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Inspection possible informs me if the visual inspection is possible",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerVisualInspectionPossible(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Visual inspection",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the plate warmer is turned on",
  "keyword": "Given "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerIsTurnedOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the maximum capacity of the plate warmer is 10",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerCapacity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "in the plate warmer are 10 plates",
  "keyword": "And "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.setPlateWarmerPlates(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove a plate to inspect it",
  "keyword": "When "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.removePlateForInspection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a Inspection possible informs me if the visual inspection is possible",
  "keyword": "Then "
});
formatter.match({
  "location": "at.schunker.swttddplatewarmer.StepDefinitions.plateWarmerVisualInspectionPossible(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});