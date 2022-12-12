import {Image, StyleSheet, ScrollView, Text, View} from 'react-native';

const FlatListNews = () => {
  const data = [
    {
      id: 1,
      img: require('../../../assets/images/Rectangle5.png'),
      text: 'انتعاش في قيمة العملات الرقمية الرئيسية تمثلت بارتفاع كل من البيتكوين والاثيريوم وكاردانو',
      date: '12 / 22 / 2018',
    },
    {
      id: 2,
      img: require('../../../assets/images/Rectangle6.png'),
      text: 'الآن هو الوقت الأفضل للاستثمار في البيتكوين، بالرغم من عمليات التصحيح الأخيرة',
      date: '12 / 22 / 2018',
    },
    {
      id: 3,
      img: require('../../../assets/images/Rectangle7.png'),
      text: 'منصة Coinbase تجني 2.7 مليون دولار يوميًا',
      date: '12 / 22 / 2018',
    },
    {
      id: 4,
      img: require('../../../assets/images/Rectangle8.png'),
      text: 'معالج المدفوعات “Stripe” يتوقف عن قبول مدفوعات عملة البيتكوين',
      date: '12 / 22 / 2018',
    },
    {
      id: 5,
      img: require('../../../assets/images/Rectangle9.png'),
      text: 'كيف ستكون العملة الرقمية الخاصة بالفيسبوك؟',
      date: '12 / 22 / 2018',
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map(item => (
        <View style={styles.container} key={item.id}>
          <View style={styles.renderItemContainer}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.date}>
              <Text style={styles.text}>{item.text}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
export default FlatListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  renderItemContainer: {
    flexDirection: 'row',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    marginVertical: 10,
    padding: 7,
    borderRadius: 10,
  },
  text: {
    paddingHorizontal: 11,
    fontSize: 11,
    color: '#000',
  },
  date: {
    flexShrink: 1,
    flexDirection: 'column',
  },
  dateText: {
    fontSize: 8,
    width: 74,
    marginTop: 20,
  },
  img: {
    width: 123,
    height: 94,
  },
});
