import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
const FlatListView = () => {
  const data = [
    {
      id: 1,
      img: require('../../../assets/images/ltc1.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'لايت كوين',
      text1: 'Litecoin',
      text2: 'يساوي',
      text3: '10,544.69 $',
    },
    {
      id: 2,
      img: require('../../../assets/images/eth.png'),
      icon: require('../../../assets/images/delete.png'),
      text: 'لايت كوين',
      text1: 'Litecoin',
      text2: 'يساوي',
      text3: '10,544.69 $',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.Content}>
          <Image source={item.img} style={styles.img} />
          <View style={styles.row}>
            <View>
              <Text style={styles.ContentText}>{item.text}</Text>
              <Text style={[styles.ContentText, styles.ContentTexts]}>
                {item.text2}
              </Text>
            </View>
            <View>
              <Text style={styles.ContentText}>{item.text1}</Text>
              <Text style={[styles.ContentText, styles.ContentTexts]}>
                {item.text3}
              </Text>
            </View>
          </View>
        </View>
        <Image source={item.icon} />
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
export default FlatListView;

const styles = StyleSheet.create({
  contentContainer: {
    width: 323,
    height: 66,
    borderColor: '#F4F4F4',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 8,
    alignSelf: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContentText: {
    fontSize: 10,
  },
  ContentTexts: {
    color: '#38AD65',
  },
});
