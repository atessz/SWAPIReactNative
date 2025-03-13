import {StyleSheet} from 'react-native';
import colors from '../styles/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    gap: 20,
  },
  searchBarContainer: {
    paddingHorizontal: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  filterButton: {
    flexDirection: 'row',
    width: 'auto',
    backgroundColor: colors.secondary,
    padding: 10,
    gap: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
  },
  textActive: {
    color: colors.background,
  },
  listContentContainer: {
    gap: 20,
    padding: 20,
  },
});
export default styles;
