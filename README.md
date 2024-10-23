# **MoviesApp**

This project is a React Native application that displays a list of popular movies and allows users to view detailed information about each movie. The app uses **React Navigation** for navigation, and **React Query** for efficient data fetching. Development was done on a **Windows machine**, and compatibility with iPhone devices is untested.

## **Features**

- Display a list of popular movies using **The Movie Database (TMDb) API**.
- View detailed information about each movie, such as release date, popularity, and description.
- Support for **dark mode** and **light mode** themes, automatically toggled based on device settings.
- Error handling for network issues using **React Query**.

## **Technologies**

- **React Native** (with TypeScript)
- **React Navigation** for navigation
- **React Query** for fetching and caching movie data
- **Axios** for API requests
- **Theme management** using `Appearance` API and context
- **Jest** and **React Native Testing Library** for unit tests
- **ESLint** and **Prettier** for code quality and formatting

## **Installation**

### **Prerequisites**

- Node.js (v14+)
- npm or Yarn package manager
- Android Studio and Android SDK (if running on an Android emulator)
- Xcode and iOS simulator (if running on macOS for iOS)
- A TMDb API key (you can get one at [TMDb](https://www.themoviedb.org/))

### **Setup**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/saramesa/MoviesApp.git
   cd moviesapp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   Or

   ```bash
    yarn
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root of your project:

   ```bash
   TMDB_API_KEY=tmdb_api_key
   ```

   Replace `tmdb_api_key` with your actual API key from TMDb.

4. **Run the app:**
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS (if testing on macOS, note that I haven't tested on iPhone):
     ```bash
     npm run ios
     ```

## **Project Structure**

```plaintext
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom hooks for fetching movie data
│   ├── navigation/      # Navigation setup using React Navigation
│   ├── screens/         # Different screens for the app
│   ├── services/        # API calls and data fetching utilities
│   ├── helpers/         # Helper functions
│   ├── theme/           # Theme context and provider
│   ├── queryKeys        # Enum with query keys used in react-query
│   └── types/           # TypeScript types and interfaces
├── .env                 # API key configuration
├── App.tsx              # Main entry point of the app
└── README.md            # Project documentation
```

## **Features Implementation**

### 1. **Movies List and Movie Details**

- The app fetches popular movies from the TMDb API using **React Query**.
- The **`MovieItem`** component displays each movie's title and poster, and clicking on a movie navigates to the **`MovieDetailScreen`**, where more information about the selected movie is shown.

### 2. **Dark Mode / Light Mode**

- The app uses the **`Appearance`** API to detect the device's current theme and use it accordingly.
- If the user changes to dark theme in mobile settings the app should change to dark mode.
- A custom **`ThemeContext`** is used to persist theme changes across the app.

### 3. **Navigation**

- **Movies List**: Displays the list of movies fetched from the API.
- **Movies Detail**: Displays more information about the movie you just clicked.

### 4. **Error Handling**

- Basic error handling is implemented using **React Query**. If a network issue occurs while fetching data, an error message is displayed to the user via the **`ErrorComponent`**.

### 5. **Testing**

- Unit tests are written using **Jest** and **React Native Testing Library** for various components, hooks, and screens.

## **Next Steps**

1. **Complete the Remaining Unit Tests**
   - Write comprehensive tests for all components, especially those involving navigation and API calls.
2. **Implement End-to-End (E2E) Testing**

   - Use **Cypress** to implement end-to-end testing to ensure all user flows work as expected.

3. **Add Internationalization (i18n)**

   - Implement **i18n** to support multiple languages for a better global user experience.
   - Use **react-i18next** for this.

4. **Create ApiClient**
   - Create a centralized api client with the base url to use for the different endpoints
   - Add config there (e.g. api key for the TMDb services)
