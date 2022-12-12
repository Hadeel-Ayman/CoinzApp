import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
  },
  rowLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 25,
  },
  header: {
    marginVertical: 14,
  },
  headerText: {
    fontSize: 20,
    color: '#000',
    marginVertical: 10,
    paddingHorizontal: 25,
  },
  date: {
    color: '#95989C',
    fontSize: 10,
    paddingHorizontal: 25,
  },
  btn: {
    flexDirection: 'row',
    marginVertical: 14,
    justifyContent: 'space-around',
    width: '89%',
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  icon: {
    backgroundColor: '#D8D8D8',
    borderRadius: 4,
    padding: 5,
  },
  texts: {
    paddingHorizontal: 25,
  },
  Text: {
    marginBottom: 25,
    fontSize: 11,
    color: '#000',
    lineHeight: 19,
  },
  head: {
    fontSize: 14,
    // marginVertical: 10,
    color: '#000',
    fontWeight: 'bold',
    lineHeight: 31,
  },
});
export default styles;
