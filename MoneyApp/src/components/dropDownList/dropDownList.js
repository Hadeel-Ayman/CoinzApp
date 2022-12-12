import {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'ايثيريوم Ethereum', value: 'ايثيريوم'},
    {label: 'ريبـل Ripple', value: 'ريبـل'},
    {label: 'كاردانو Cardano', value: 'كاردانو'},
    {label: 'لايت كوين Litecoin', value: 'لايت كوين'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.DropDown}
      placeholder="بتكوين Bitcoin"
      //   showArr/owIcon={true}
      showArrowIcon={() => {
        <Image source={require('../../../assets/images/eth1.png')} />;
      }}
      dropDownContainerStyle={styles.DropDown1}
    />
  );
};
export default DropDown;

const styles = StyleSheet.create({
  DropDown: {
    borderColor: '#F4F4F4',
    zIndex: 1000,
    marginVertical: 11,
  },
  DropDown1: {
    borderColor: '#F4F4F4',
  },
});
