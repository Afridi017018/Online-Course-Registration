# Online Course Registration

## Features

- **Shopping Cart:** This project includes a shopping cart where selected courses are displayed. Users can view the list of courses they've selected along with the total credit hours accumulated in the cart.

- **Course Selection and Credit Limit:** The project allows users to select courses by clicking on the "Select" button in each course card. It keeps track of the selected courses in the cart and calculates the total credit hours with total price. It also provides feedback to the user through toast notifications when they attempt to select invalid courses or exceed the credit limit.

- **Dynamic Rendering:** The project dynamically renders course cards based on data fetched from a JSON file (`fakeData.json`).

## State Management

- State variables are managed using the `useState` hook.
- State variables and their setter functions are passed as props to child components.

