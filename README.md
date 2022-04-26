## User instructions

- run node from the project folder in the terminal
- .load account.js
- create a new account
  - account = new account()
- user can:
  - deposit money
    - account.deposit(100)
  - withdraw money
    - account.withdraw(50)
  - print their statment
    - account.printStatement()

## Assumptions made

These assumptions would have been clarified with the client

- new accounts open with a balance of zero
- account holders cannot go overdrawn

## Further work needed

- mock out dependencies from the Account class tests
- console log error messages
- implement a linter
- check test coverage
