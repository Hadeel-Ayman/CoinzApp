import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles, Links, ButtonRow, Entypo} from './index';
const img = require('../../../assets/images/Bitmap.png');
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowLine}>
        <ButtonRow text="عودة" />
        <ButtonRow text="مشاركة" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            انتعاش في قيمة العملات الرقمية الرئيسية تمثلت بارتفاع كل من
            البيتكوين والاثيريوم{' '}
          </Text>
          <Text style={styles.date}>25 يناير 2018</Text>
        </View>
        <Image source={img} />
        <View style={styles.btn}>
          <Links
            text="مشاركة عبر فيسبوك"
            backgroundColor="#2D609B"
            color="#fff"
          />
          <Links
            text="مشاركة عبر تويتر"
            backgroundColor="#00C3F3"
            color="#fff"
          />
          <TouchableOpacity style={styles.shareBtn}>
            <Entypo
              name="share"
              size={25}
              color={'#6F6F6F'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.texts}>
          <Text style={styles.Text}>
            باستثناء عملة الريبل والتي أظهرت أداءاً ضعيفاً طوال الأسابيع القليلة
            الماضية، فإن العملات الرقمية الرئيسية في السوق بما في ذلك البيتكوين
            والاثيريوم وكاردانو قد ارتفعت قيمتها. وفي غضون الـ 24 ساعة الماضية،
            ازداد سعر البيتكوين بنسبة 8% وارتفعت قيمة الإيثر بنسبة 10%، كما
            وارتفعت قيمة كاردانو بنسبة 15%. وبينما انخفض سعر العملات الثلاث
            بهامش ضئيل في الثلاث ساعات الماضية، إلا أنهم لا زالوا يسجلون مكاسب
            يومية كبيرة نسبياً.
          </Text>
          <Text style={styles.Text}>
            <Text style={styles.head}>شعبية البيتكوين</Text>
            {'\n'}خلال عملية التصحيحٍ الكبيرة التي حدثت في أوائل كانون
            الثاني/يناير، هبطت أسعار معظم العملات الرقمية بنسبة أكثر من 50% من
            أعلى قيمة لها، إلا أنه من ناحية أخرى ازدادت شعبية البيتكوين أكثر.
            حيث أقبل المستثمرون على العملات الرقمية ذات التقلبات الأقل في
            الأسعار. وفي ذلك الوقت، ارتفع مؤشر هيمنة البيتكوين إلى 38%، إذ تعافت
            العملة من أدنى مستوياتها بعد انخفاض بنسبة 32%. وخلال الأسبوع الماضي،
            انخفض مؤشر هيمنة البيتكوين من 38% إلى 34%، مع انخفاض حجم معاملات
            البيتكوين اليومية إلى أكثر من النصف، أي من 490.000 إلى 242.000
            دولار.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
