Feature: PlateWarmer Capacity Management
  The capacity of the plates should managed correctly

  Scenario: Turn on plate warmer
    Given the plate warmer is turned off
    When I turn on the plate warmer
    Then the plate warmer is ready for use
    And the plate stack is empty

  Scenario: Turn off empty plate warmer
    Given the plate warmer is turned on
    And the plate warmer is empty
    When I turn off the plate warmer
    Then the plate warmer is out of order
    And no plates can be added

  Scenario: Turn off non empty plate warmer
    Given the plate warmer is turned on
    And the plate warmer is not empy
    When I turn off the plate warmer
    Then I receive a notice that the plate warmer is not empty
    And the plate warmer remains active

  Scenario: Turn off filled plate warmer
    Given the plate warmer is turned on
    And the plate warmer is completely filled
    When I turn off the plate warmer
    Then I receive a notice that the plate warmer is not empty
    And the plate warmer remains active

  Scenario Outline: Add plate
    Given the plate warmer is turned on
    And the max capacity of the plate warmer is 10
    And there are <CountOfPlates> plates in the plate warmer
    When I add a plate
    Then there are <NewCountOfPlates> plates in the plate warmer
    And a <Notice> informs me if the addition was successful
    Examples:
    |CountOfPlates  |NewCountOfPlates |Notice |
    |0              |1                |Addition successful    |
    |8              |9                |Addition successful    |
    |9              |10               |Addition successful    |
    |10             |10               |Addition unsuccessful  |

  Scenario Outline: Remove plate
    Given the plate warmer is turned on
    And the maximum capacity of plates is 10
    And there are <CountOfPlates> plates in the plate warmer
    When I remove a plate from the plate warmer
    Then there are <NewCountOfPlates> plates in the plate warmer
    And a <Notice> informs me if the if the removement was successful
    Examples:
    |CountOfPlates  |NewCountOfPlates |Notice |
    |0              |0                |Remove unsuccessful  |
    |1              |0                |Remove successful    |
    |2              |1                |Remove successful    |
    |10             |9                |Remove successful    |

  Scenario Outline: Visual inspection
    Given the plate warmer is turned on
    And the maximum capacity of the plate warmer is 10
    And in the plate warmer are <CountOfPlates> plates
    When I remove a plate to inspect it
    Then a <Notice> informs me if the visual inspection is possible
    Examples:
    |CountOfPlates    |Notice   |
    |0                |Inspection not possible    |
    |1                |Inspection possible        |
    |10               |Inspection possible        |