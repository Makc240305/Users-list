# User Invitations App

This project is a simple user management application built with React. It allows users to browse a list of users, search for specific individuals, and send them invitations.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast development build tool for modern web projects.
*   **SCSS:** A CSS preprocessor for enhanced styling capabilities.

## Features

*   Fetches user data from an API.
*   Allows searching for users by name.
*   Users can be selected for invitations.
*   Confirmation screen after sending invitations.

## Getting Started

To run this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/Makc240305/Users-list.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Users-list
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

The app should now be running on `http://localhost:5173`.

## How It Works

1.  The app fetches user data from an external API.
2.  Users can search for names using the input field.
3.  Clicking on a user selects them for an invitation.
4.  Once selected, the invitation can be sent.
5.  A confirmation screen displays the number of invitations sent.
