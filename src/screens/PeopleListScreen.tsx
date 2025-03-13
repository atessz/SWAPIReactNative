import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar/SearchBar';
import colors from '../styles/Colors';
import {useCallback, useEffect, useState} from 'react';
import {Person} from '../types/types';
import PersonCard from '../components/PersonCard/PersonCard';
import {getPeople} from '../services/peopleService';
import generalStyles from '../styles/generalStyles';
import styles from './styles';
import {ListFilterIcon} from 'lucide-react-native';
import _ from 'lodash';

const PeopleListScreen = (): React.JSX.Element => {
  const insets = useSafeAreaInsets();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [people, setPeople] = useState<Person[]>([]);
  const [searchString, setSearchString] = useState<string>('');
  const [sortByBlueEyes, setSortByBlueEyes] = useState<boolean>(false);

  const sortPeople = useCallback(
    (peopleData: Person[]): Person[] => {
      if (sortByBlueEyes) {
        const blueEyesSorted = _.sortBy(
          _.filter(peopleData, person => person.eye_color === 'blue'),
          'name',
        );

        const notBlueEyesSorted = _.sortBy(
          _.filter(peopleData, person => person.eye_color !== 'blue'),
          'created',
        );

        return _.union(blueEyesSorted, notBlueEyesSorted);
      }

      return peopleData;
    },
    [sortByBlueEyes],
  );

  useEffect(() => {
    setIsLoading(true);
    getPeople(searchString)
      .then(data => setPeople(sortPeople(data)))
      .finally(() => setIsLoading(false));
  }, [searchString, sortPeople]);

  return (
    <View
      style={[
        {
          paddingTop: insets?.top,
        },
        styles.container,
        generalStyles.flex1,
      ]}>
      <View style={styles.searchBarContainer}>
        <SearchBar value={searchString} setValue={setSearchString} />
      </View>
      <View style={styles.filterContainer}>
        <Pressable
          testID="sortByBlueEyesButton"
          style={[
            styles.filterButton,
            sortByBlueEyes && styles.filterButtonActive,
          ]}
          onPress={() => setSortByBlueEyes(!sortByBlueEyes)}>
          <ListFilterIcon
            size={24}
            color={sortByBlueEyes ? colors.background : colors.text}
          />
          <Text style={sortByBlueEyes ? styles.textActive : generalStyles.text}>
            {'Sort by blue eyes'}
          </Text>
        </Pressable>
      </View>
      {isLoading ? (
        <ActivityIndicator
          testID="loadingIndicator"
          style={generalStyles.flex1}
          size="large"
          color={colors.primary}
        />
      ) : (
        <FlatList
          contentContainerStyle={[
            styles.listContentContainer,
            {
              paddingBottom: insets?.bottom + 20,
            },
          ]}
          indicatorStyle={'white'}
          data={people}
          renderItem={({item: person}: {item: Person}) => {
            return <PersonCard person={person} />;
          }}
          keyExtractor={person => person.name}
        />
      )}
    </View>
  );
};

export default PeopleListScreen;
