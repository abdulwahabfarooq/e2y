Feature: Shopping Cart

Scenario: User adds a t-shirt to the shopping cart
  Given the user is on the homepage
  When the user adds a t-shirt to the cart
  Then the shopping cart should contain 1 item

Scenario: User adds multiple t-shirts to the shopping cart
  Given the user is on the homepage
  When the user adds two t-shirts to the cart
  Then the shopping cart should contain 2 items

Scenario: User removes a t-shirt from the shopping cart
  Given the user has added a t-shirt to the cart
  When the user removes the t-shirt from the cart
  Then the shopping cart should be empty
