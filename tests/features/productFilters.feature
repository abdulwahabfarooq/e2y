Feature: Product Filters

Scenario: User filters t-shirts by size
  Given the user is on the homepage
  When the user selects a size filter
  Then the displayed t-shirts should be of the selected size

Scenario: User orders t-shirts by price
  Given the user is on the homepage
  When the user selects "Order by price" option
  Then the t-shirts should be displayed in the correct price order
