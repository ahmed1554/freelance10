# Travel Basket React App

This project is a simple travel basket application built with React. It allows users to add travel packages to their basket, view the total price, and confirm their reservation.

## Features

- View basket items
- Remove items from the basket
- Confirm reservation
- Success confirmation page

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Backend Integration

To integrate real backend calls, replace the mock functions in `BasketPage.js` with actual API calls:

- `POST /api/basket/add` - Add an item to the basket
- `DELETE /api/basket/{id}` - Remove an item from the basket
- `POST /api/basket/checkout` - Confirm the reservation

## Styling

- Styled 
