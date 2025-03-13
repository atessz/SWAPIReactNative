import React from 'react';
import {getPeople} from '../src/services/peopleService';
import PeopleListScreen from '../src/screens/PeopleListScreen';
import {render, fireEvent, waitFor} from '@testing-library/react-native';


jest.mock('react-native-safe-area-context', () => ({
    ...jest.requireActual('react-native-safe-area-context'),
    useSafeAreaInsets: () => ({top: 0, bottom: 0, left: 0, right: 0}),
  }));

jest.mock('../src/services/peopleService', () => ({
  getPeople: jest.fn(),
}));

const mockPeople = [
  {name: 'Luke Skywalker', eye_color: 'blue', created: '2024-03-01T12:00:00Z'},
  {name: 'Darth Vader', eye_color: 'yellow', created: '2024-03-02T15:00:00Z'},
  {name: 'Leia Organa', eye_color: 'brown', created: '2024-03-03T10:30:00Z'},
  {name: 'Obi-Wan Kenobi', eye_color: 'blue', created: '2024-03-04T09:45:00Z'},
];

describe('PeopleListScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('filters people by search query', async () => {
    (getPeople as jest.Mock).mockResolvedValue(mockPeople);

    const {getByPlaceholderText, getByText} = render(<PeopleListScreen />);

    await waitFor(() => expect(getPeople).toHaveBeenCalled());

    const searchBar = getByPlaceholderText('Search');
    fireEvent.changeText(searchBar, 'Luke');

    await waitFor(() => {
      expect(getByText('Luke Skywalker')).toBeTruthy();
    });
  });

  test('sorts people with blue eyes first when filter is active', async () => {
    (getPeople as jest.Mock).mockResolvedValue(mockPeople);

    const {getByText, getByTestId} = render(<PeopleListScreen />);

    await waitFor(() => expect(getPeople).toHaveBeenCalled());

    const filterButton = getByTestId('sortByBlueEyesButton');
    fireEvent.press(filterButton);

    await waitFor(() => {
      const firstPerson = getByText('Luke Skywalker');
      expect(firstPerson).toBeTruthy();
    });
  });

  test('shows loading indicator while fetching data', async () => {
    (getPeople as jest.Mock).mockImplementation(() => new Promise(() => {}));

    const {getByTestId} = render(<PeopleListScreen />);
    expect(getByTestId('loadingIndicator')).toBeTruthy();
  });
});
