import {Text, TouchableOpacity, View} from 'react-native';
import {styles, DropDown, FlatListView, LinearGradient, Colors} from './index';
const AlarmScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentDiv}>
        <Text style={styles.text}>منبه العملات</Text>
      </View>
      <View style={styles.dropDownDiv}>
        <Text style={styles.txt}>يرجى اختيار نوع العملة</Text>
        <DropDown />
      </View>
      <View style={styles.dropDownDiv}>
        <Text style={styles.txt}>يرجى تحديد قيمة المنبه</Text>
        <DropDown />
      </View>
      <LinearGradient
        colors={[Colors.Orange.orange, Colors.Orange.main]}
        start={{x: 0, y: 0}}
        style={styles.btn}
        end={{x: 1, y: 0}}>
        <TouchableOpacity>
          <Text style={styles.txts}>اضافة تنبيه</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.separetor} />
      <FlatListView />
    </View>
  );
};
export default AlarmScreen;
