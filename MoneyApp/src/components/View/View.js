import { Image, StyleSheet, Text, View } from 'react-native';
const ViewContainer = props => {
  return (
    <View style={styles.container}>
      <Image source={props.img} style={styles.img} />
      <View style={styles.row}>
        <Text style={({ color: props.color }, styles.text)}>{props.text}</Text>
        <Text style={({ color: props.color }, styles.text2)}>{props.text2}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.txt}>{props.text1}</Text>
      </View>
    </View>
  );
};
export default ViewContainer;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  txt: {
    fontSize: 10,
    color: '#fff',
    paddingHorizontal: 10,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 11,
    color: '#fff',
  },
  text2: {
    fontSize: 11,
    color: '#fff',
  },
  container: {
    paddingBottom: 10
  },
});
