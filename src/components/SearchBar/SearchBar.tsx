import {JSX} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import colors from '../../styles/Colors';
import styles from './styles';
import {SearchIcon, X} from 'lucide-react-native';

type SearchBarProps = {
  value: string;
  setValue: (value: string) => void;
};

const SearchBar = ({value, setValue}: SearchBarProps): JSX.Element => {
  return (
    <View style={styles.textInputContainer}>
      <SearchIcon size={24} color={colors.background} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        autoCorrect={false}
        cursorColor={colors.background}
        selectionColor={colors.background}
        placeholderTextColor={colors.card}
        value={value}
        onChangeText={setValue}
      />
      <Pressable onPress={() => setValue('')}>
        <X size={24} color={colors.background} />
      </Pressable>
    </View>
  );
};

export default SearchBar;
