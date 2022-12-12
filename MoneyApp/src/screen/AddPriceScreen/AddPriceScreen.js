import { Text, View } from 'react-native';
import { useTheme } from '../../context/Provider/them.Provider';
import {
  styles,
  ViewContainer,
LinearGradient,
  FlatListView2,
  Colors,
  RowView,
} from '../pricesScreen/index';
const AddPriceScreen = () => {
  const theme = useTheme();
  return (
    <View style={[{ backgroundColor: theme.colors.background }, styles.container]}>
      <View style={styles.contentContainer}>
        <Text style={[{ color: theme.colors.primary }, styles.txt]}>اسـعار العملات الالكترونية</Text>
      </View>
      <View style={styles.row}>
        <Text style={[{ color: theme.colors.primary }, styles.text]}>آخر تحديث: </Text>
        <Text style={[{ color: theme.colors.primary }, styles.text, styles.texts]}>09-19-2018</Text>
      </View>
      <View>
        <View style={styles.rowBlock}>
          <LinearGradient
            colors={[Colors.pink.pink1, Colors.pink.pink2]}
            start={{ x: 0, y: 0 }}
            style={styles.btn}
            end={{ x: 1, y: 0 }}>
            <ViewContainer
              text="ريبـل"
              text2="Ripple"
              text1=" $ 10,544.69"
              img={require('../../../assets/images/xrp2.png')}
            />
          </LinearGradient>
          <LinearGradient
            colors={[Colors.Orange.orange, Colors.Orange.main]}
            style={styles.btn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <ViewContainer
              text="بيتكوين"
              text2="Bitcoin"
              text1=" $ 10,544.69"
              img={require('../../../assets/images/btc.png')}
            />
          </LinearGradient>
        </View>
        <View style={styles.rowBlock}>
          <LinearGradient
            colors={[Colors.green.green1, Colors.green.green2]}
            style={styles.btn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <ViewContainer
              text="ايثيريوم"
              text2="Ethereum"
              text1=" $ 10,544.69"
              img={require('../../../assets/images/eth1.png')}
            />
          </LinearGradient>
          <LinearGradient
            colors={[Colors.gray.gray, Colors.gray.gray]}
            style={styles.btn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <ViewContainer
              text="اضغط للاضافة"
              img={require('../../../assets/images/icons8-plus.png')}
            />
          </LinearGradient>
        </View>
      </View>
      <RowView />
      <FlatListView2 />
    </View>
  );
};
export default AddPriceScreen;
