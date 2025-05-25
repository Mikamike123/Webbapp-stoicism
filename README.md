# Stoic Wisdom Quote App

Stoic Wisdom Quote App is a simple Progressive Web Application (PWA) built with HTML, CSS, and vanilla JavaScript. It allows users to explore a collection of Stoic philosophy quotes, save their favorites, track their viewing history, and customize their experience with features like dark mode. The app also supports importing and exporting favorite quotes as a JSON file.

## Features

*   **Random Quote:** View a random Stoic quote on the home screen.
*   **Browse Quotes:** Explore all available quotes.
*   **Filter by Author:** Filter quotes by specific Stoic philosophers.
*   **Favorites:** Mark quotes as favorites for easy access. Favorite quotes are saved in `localStorage`.
*   **Viewing History:** Keep track of recently viewed quotes, also saved in `localStorage`.
*   **Dark Mode:** Switch between light and dark themes for comfortable reading.
*   **Import/Export Favorites:** Save your favorite quotes to a JSON file or import them from a previously saved file.
*   **PWA:** Installable as a Progressive Web App on supported devices for an app-like experience.
*   **Copy Quote:** Easily copy the quote text, author, and work to the clipboard.

## Usage

There are a couple of ways to run this application:

1.  **Directly in a Browser:**
    *   Clone or download this repository to your local machine.
    *   Navigate to the project directory.
    *   Open the `index.html` file in your web browser.

2.  **As a PWA (Progressive Web App):**
    *   Access the application through a web server (e.g., by deploying it to a hosting service or using a local server).
    *   On supported browsers (like Chrome, Edge, Safari on mobile), you should see an option to "Install" the application to your device. This will allow you to run it like a native app from your home screen or app drawer.

## Technologies Used

*   **HTML:** For the basic structure and content of the web pages.
*   **CSS:** For styling the application, including a dark mode theme.
*   **Vanilla JavaScript:** For all the application logic, including quote management, favorites, history, and UI interactions. No external frameworks or libraries are used for the core functionality.
*   **PWA (Progressive Web App):**
    *   **Manifest File (`manifest.json`):** Provides information about the application (like name, icons, start URL) to the browser, enabling the "Add to Home Screen" feature.
    *   **Service Worker (`sw.js`):** A script that runs in the background, separate from the web page, enabling features like offline capabilities (though the current `sw.js` might be basic and primarily for PWA installability).
*   **LocalStorage:** Used to store user preferences like dark mode settings, favorite quotes, and viewing history directly in the browser.

## Quote Sources

The Stoic philosophy quotes included in this application are stored in the `quotes.js` file. Authors and, where available, their works are attributed alongside each quote.

## Screenshot

*(It is recommended to add a screenshot of the application here to give users a visual preview.)*

Example:
`![App Screenshot](path/to/your/screenshot.png)`
