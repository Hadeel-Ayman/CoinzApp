import {View, Text, ScrollView} from 'react-native';
import FlatListNews from '../../components/scrollView/scrollView';
import styles from './style';
const NewsScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.NewsSection}>
        <Text style={styles.NewsText}>اخبار وتقارير</Text>
        <FlatListNews />
      </View>
    </ScrollView>
  );
};

export default NewsScreen;
