import { Text, View } from 'react-native';
import {
  styles,
  ViewContainer,
  LinearGradient,
  FlatListView2,
  Colors,
  RowView
} from './index';
const PriceScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.txt}>اسـعار العملات الالكترونية</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}> آخر تحديث : </Text>
        <Text style={[styles.text, styles.texts]}>09-19-2018</Text>
      </View>
      <View>
        <View style={styles.rowBlock}>
          <LinearGradient
            colors={[Colors.pink.pink1, Colors.pink.pink2]}
            start={{ x: 0, y: 0 }}
            style={styles.btn}
            end={{ x: 1, y: 0 }}>
            <ViewContainer
              text='ريبل'
              text1='10,544.69 $'
              text2="Ripple"
              img={require('../../../assets/images/xrp2.png')}
            />
          </LinearGradient>
          <LinearGradient
            colors={[Colors.Orange.orange, Colors.Orange.main]}
            style={styles.btn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <ViewContainer
              text='بيتكوين'
              text1='10,544.69 $'
              text2="Bitcoin"
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
              text1='10,544.69 $'
              text='ايثيريوم'
              text2="Ethereum"
              img={require('../../../assets/images/eth1.png')}
            />
          </LinearGradient>
          <LinearGradient
            colors={[Colors.blue.blue1, Colors.blue.blue2]}
            style={styles.btn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <ViewContainer
              text1='10,544.69 $'
              text='لايت كوين'
              text2="Litecoin"
              img={require('../../../assets/images/ltc1.png')}
            />
          </LinearGradient>
        </View>
      </View>
      <RowView />
      <FlatListView2 />
    </View>
  );
};
export default PriceScreen;
