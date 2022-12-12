import {Image, View} from 'react-native';
import styles from './style';

const BlockScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/Group.png')} />
    </View>
  );
};
export default BlockScreen;
