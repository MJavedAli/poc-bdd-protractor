Feature: Xylem basic portal test

    Scenario Outline: To verify that the user is able to login successfully
        Given I am on xylect homepage
        When I login with "<userTypes>" user
        Then I validate for successful login
        Examples:
            | userTypes |
            | Valid     |
    Scenario Outline: To verify pump model quantity
        Given I am at Project page
        Then I validate pump model count for "<searchTag>" and select "<series>"
        Examples:
            | searchTag | series                            |
            | N 3000    | N 3000, N-technology pumps, Flygt |
    Scenario: To verify the language list
        Given I am at Project page
        Then I verify the language list



