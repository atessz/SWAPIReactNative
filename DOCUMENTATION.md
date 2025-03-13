
# Documentation for SWAPIReactNative

## 1. Overview
This documentation outlines the design steps and implementation details for the `PeopleListScreen` and `PersonCard` components in a React Native application. The primary goal is to display a list of people from the SWAPI API, allowing users to search, filter, and sort characters based on specific attributes.

## 2. Design Steps

### 2.1. `PeopleListScreen` Component
The `PeopleListScreen` component displays a list of characters. Users can filter the list by a specific attribute (e.g., sorting by blue eyes), and the list updates dynamically based on the search query.

1. **State Management:**
   - **isLoading**: Tracks whether the data is being fetched.
   - **people**: Stores the list of people returned from the API.
   - **searchString**: Holds the current search query entered by the user.
   - **sortByBlueEyes**: Toggles the sorting behavior based on blue eyes color.

2. **Sorting Logic:**
   - The `sortPeople` function filters and sorts the list of characters. If `sortByBlueEyes` is `true`, it:
     - Sorts people with blue eyes alphabetically by their names.
     - Sorts the remaining people by their creation date.
   - The `_.union` method ensures that both sorted groups are combined without duplicates.

3. **API Fetching:**
   - When the `searchString` changes, the API call is triggered using the `getPeople` service.
   - Data is fetched and sorted, and the loading state is updated accordingly.

4. **UI:**
   - A search bar is included at the top to filter the list of people.
   - A filter button allows toggling the sorting behavior by blue eyes.
   - An activity indicator is shown while data is loading.
   - The `FlatList` component displays the filtered and sorted list of people.

### 2.2. `PersonCard` Component
The `PersonCard` component is a reusable UI element that displays details about a single character.

1. **State Management:**
   - This component does not manage any internal state. It receives a `person` prop, which contains the data for a specific character.

2. **UI Layout:**
   - The character's **name** and **birth year** are displayed at the top.
   - Below, two columns show the character's **hair color**, **eye color**, **height**, and **mass**.
   - A flexible layout ensures that the details are arranged neatly across devices.

3. **Handling Unknown Values:**
   - For attributes such as hair color, mass, and height that may have an `"unknown"` value, a custom function formats them to display `"N/A"`.

## 3. Implementation Steps

### 3.1. `PeopleListScreen` Implementation

1. **Imports:**
   - `ActivityIndicator`, `FlatList`, `Text`, `View`: UI components from React Native.
   - `useSafeAreaInsets`: Ensures the layout respects device notches or safe areas.
   - `SearchBar`: A custom search bar component for filtering the list.
   - `getPeople`: An API call service to fetch character data.
   - `ListFilterIcon`: A custom icon for the filter button.

2. **State and Effect Hooks:**
   - Used `useState` for managing state values such as loading state and the list of people.
   - `useEffect` is employed to trigger an API call every time the search string changes.
   - `useCallback` is used to memoize the `sortPeople` function, ensuring it doesn't cause unnecessary re-renders.

3. **UI Layout:**
   - A search bar allows users to filter characters by name.
   - A button (filter icon) toggles the sorting by blue eyes.
   - The data is displayed using `FlatList` for efficient rendering of lists.

### 3.2. `PersonCard` Implementation

1. **Imports:**
   - `Text`, `View`: For structuring and styling text and layout.
   - The `PersonCardProps` type ensures type safety by defining the structure of the `person` prop.

2. **UI Layout:**
   - Displays the character's name, birth year, hair color, eye color, height, and mass in a row layout.
   - Utilizes `generalStyles` for consistent styling (e.g., text styles, flexbox layout).

## 4. Conclusion
The `PeopleListScreen` and `PersonCard` components together provide an intuitive way to list and filter characters from the SWAPI API. They offer flexibility with sorting, searching, and displaying detailed character information in a user-friendly format. 

This design ensures a smooth user experience with clear, maintainable code.