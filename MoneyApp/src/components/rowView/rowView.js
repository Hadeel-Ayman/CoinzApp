import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../context/Provider/them.Provider';

const RowView = () => {
  const them = useTheme();
  return (
    <View style={[{ backgroundColor: them.colors.background }, styles.scroll]}>
      <Text style={styles.scrollText}>العملة</Text>
      <Text style={styles.scrollText}>السعر</Text>
      <Text style={styles.scrollText}>التداول</Text>
    </View>
  );
};
export default RowView;

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    backgroundColor: '#F8F9FB',
    height: 41,
    marginVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  scrollText: {
    fontSize: 10,
    color: '#95989C',
  },
});