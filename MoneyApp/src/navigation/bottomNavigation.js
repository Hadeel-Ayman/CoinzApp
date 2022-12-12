import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AlarmScreen, PriceScreen, NewsScreen} from '../screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'PriceScreen') {
            iconName = focused ? 'wallet-outline' : 'wallet-outline';
          } else if (route.name === 'AlarmScreen') {
            iconName = focused ? 'bell' : 'bell-outline';
          } else if (route.name === 'NewsScreen') {
            iconName = focused
              ? 'newspaper-variant'
              : 'newspaper-variant-outline';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen
        name="PriceScreen"
        component={PriceScreen}
        options={{
          tabBarLabel: 'أسعار العملات',
        }}
      />
      <Tab.Screen
        name="AlarmScreen"
        component={AlarmScreen}
        options={{
          tabBarLabel: 'منبه العملات',
        }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{tabBarLabel: 'أخبار وتقارير'}}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
