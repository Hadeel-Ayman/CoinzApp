import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonRow = props => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize:12,
    color:'#000'
  }
});
export default ButtonRow;
