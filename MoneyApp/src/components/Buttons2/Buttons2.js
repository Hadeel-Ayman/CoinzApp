import {TouchableOpacity, Text, View} from 'react-native';

const Links = props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: props.backgroundColor,
          borderRadius: 4,
          width: 115,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: props.color, fontSize: 10}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Links;
