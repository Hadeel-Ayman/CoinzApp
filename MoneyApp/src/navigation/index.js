import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './bottomNavigation';
import AddPriceScreen from '../screen/AddPriceScreen/AddPriceScreen';
import { HomeScreen } from '../screen';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      {/* <Stack.Screen name="AddPriceScreen" component={AddPriceScreen} /> */}
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}

    </Stack.Navigator>
  );
};
export default MyStack;
