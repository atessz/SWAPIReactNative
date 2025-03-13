import {Platform, StyleSheet} from 'react-native';
import colors from '../../styles/Colors';

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: Platform.select({ios: 10, android: 5}),
    borderRadius: 20,
    gap: 10,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: colors.background,
    fontSize: 16,
  },
});

export default styles;
