# User Management Table

This **React** application provides a dynamic user management table that allows filtering of user data by various attributes such as name, username, email, and phone. The data is fetched from a mock API and managed through **Redux Toolkit**, with comprehensive **TypeScript** support to ensure type safety.

## Features

- **User Table with Filtering:** Displays a list of users in a table format, with columns for name, username, email, and phone. Users can filter the data in real-time by typing into search inputs located in each column's header.
- **Dynamic Filtering:** Implements a search feature that allows filtering by multiple fields simultaneously (name, username, email, phone) with instant updates to the displayed results.
- **Redux Toolkit for State Management:** The state of the application, including the fetched user data and current filter values, is managed via Redux Toolkit for a clean and maintainable structure.
- **React Table:** Leverages **React Table** for the table implementation, providing efficient rendering and a simple API for managing the table's structure and data.
- **TypeScript for Type Safety:** The entire application is built with TypeScript, ensuring proper typing for data, components, and state, which helps reduce potential errors at runtime.
- **Custom Styling:** The application features a clean and user-friendly UI, styled using CSS modules for scoped and maintainable styles.

## Technologies Used

- **React** for the frontend framework
- **Redux Toolkit** for managing state
- **React Table** for table implementation
- **TypeScript** for type safety
- **CSS Modules** for component-level styling
- **JSONPlaceholder API** to simulate real user data

## Code Overview

### State Management
The user data is fetched from a mock API using Redux. The state management includes user data and the filter inputs for each column. As the user interacts with the filters, the table updates in real-time.

### Table Component
The table uses **React Table** to organize the user data. Each column has a custom filter, allowing users to search by name, username, email, or phone. The filter inputs are located in the headers of each column.

### Filter Functionality
Filtering is handled locally within the component. The table re-renders only when necessary to optimize performance, ensuring efficient updates as users type in the filter fields.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/lisaborysenko/users-manager-app

2. Install dependencies
 ```bash
npm install

3. Run the application:
```bash
npm start
