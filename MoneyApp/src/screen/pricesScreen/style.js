import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingHorizontal: 25,
    marginTop: 40,
  },
  txt: {
    fontSize: 20,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  text: {
    fontSize: 12,
    color: '#95989C',
    alignItems: 'flex-start',
  },
  texts: {
    paddingHorizontal: 4,
  },
  rowBlock: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btn: {
    width: 155,
    height: 100,
    borderRadius: 8,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
  },
});
export default styles;
