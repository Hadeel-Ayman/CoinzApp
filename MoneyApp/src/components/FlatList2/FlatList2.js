import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
const FlatListView2 = () => {
  const data = [
    {
      id: 1,
      img: require('../../../assets/images/btc.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'بيتكوين',
      text1: 'Bitcoin',
      text2: 'يساوي',
      text3: '10,544.69 $',
      text4: '8.19%',
    },
    {
      id: 2,
      img: require('../../../assets/images/eth.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'ايثيريوم',
      text1: 'Ethereum',
      text2: 'يساوي',
      text3: '10,544.69 $',
      text4: '8.19%',
    },
    {
      id: 3,
      img: require('../../../assets/images/xrp.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'ريبـل',
      text1: 'Ripple',
      text2: 'يساوي',
      text3: '10,544.69 $',
      text4: '8.19%',
    },
    {
      id: 4,
      img: require('../../../assets/images/ada.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'كاردانو',
      text1: 'Cardano',
      text2: 'يساوي',
      text3: '10,544.69 $',
      text4: '8.19%',
    },
    {
      id: 5,
      img: require('../../../assets/images/ltc.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'نيو',
      text1: 'Litecoin',
      text2: 'يساوي',
      text3: '10,544.69 $',
      text4: '8.19%',
    },
    {
      id: 6,
      img: require('../../../assets/images/neo.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'لايت كوين',
      text1: 'Litecoin',
      text2: 'يساوي',
      text3: '10,544.69 $',
      text4: '8.19%',
    },
    {
      id: 7,
      img: require('../../../assets/images/xem.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'لايت كوين',
      text1: 'Litecoin',
      text2: 'يساوي',
      text3: '10,544.69 $',
      text4: '8.19%',
    },
    {
      id: 8,
      img: require('../../../assets/images/miota.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'لايت كوين',
      text1: 'Litecoin',
      text2: 'يساوي',
      text3: '10,544.69 $',
      text4: '8.19%',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.txt}>{item.id}</Text>
        <Image source={item.img} style={styles.img} />
        <Text style={styles.txt}>{item.text}</Text>
        <Text style={styles.txt}>{item.text1}</Text>
        <Text style={styles.txt}>{item.text3}</Text>
        <Text style={styles.txt}>{item.text4}</Text>
      </View>
    </View>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={data => data.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default FlatListView2;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginVertical: 15,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 10,
  },
  img: {
    width: 21,
    height: 18,
    resizeMode: 'contain',
  },
});
