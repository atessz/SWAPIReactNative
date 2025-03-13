import {StyleSheet} from 'react-native';
import colors from '../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    gap: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.card,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 20,
  },
});
export default styles;
