import {Text, View} from 'react-native';
import {Person} from '../../types/types';
import styles from './styles';
import generalStyles from '../../styles/generalStyles';

type PersonCardProps = {
  person: Person;
};

const PersonCard = ({person}: PersonCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[generalStyles.text, styles.title]}>{person.name}</Text>
        <Text style={generalStyles.text}>{`(${person.birth_year})`}</Text>
      </View>
      <View style={generalStyles.row}>
        <View style={generalStyles.flex1}>
          <Text style={generalStyles.text}>{`Hair: ${person.hair_color}`}</Text>
          <Text style={generalStyles.text}>{`Eye: ${person.eye_color}`}</Text>
        </View>
        <View style={generalStyles.flex1}>
          <Text style={generalStyles.text}>{`${person.height} cm`}</Text>
          <Text style={generalStyles.text}>{`${person.mass} kg`}</Text>
        </View>
      </View>
    </View>
  );
};

export default PersonCard;
