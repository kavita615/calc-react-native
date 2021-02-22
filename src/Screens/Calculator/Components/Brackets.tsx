import React from 'react';
import {StyleSheet, View} from 'react-native';
import scaler from 'src/Utils/Shared/scaler';
import Button from './Button';

function Brackets({text, setText, opened, setOpened, handleBackspace}: any) {
  const brac = (value: any) => {
    if (value === '(') {
      const char = text.charAt(text.length - 1);
      if (char !== '' && (Number.isInteger(Number(char)) || char === ')')) {
        setText(text + 'x' + value);
      } else {
        setText(text + value);
      }
      setOpened((prevOpened: number) => prevOpened + 1);
      return;
    } else if (text !== '' && value === ')') {
      const char = text.charAt(text.length - 1);
      if (Number.isInteger(Number(char)) && opened > 0) {
        setText(text + value);
        setOpened((prevOpened: number) => prevOpened - 1);
      }
      return;
    }
  };

  return (
    <View style={styles.uprbrackets}>
      <Button title={'('} styles={equal} onClick={brac} />
      <Button title={')'} styles={equal} onClick={brac} />
      <Button title={'C'} styles={equal} onClick={handleBackspace} />
      {/* <TouchableOpacity style={styles.img} onPress={handleBackspace}>
        <Image source={require('../../../Assets/IconImage/delete.png')} />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  uprbrackets: {
    marginLeft: 2,
    marginRight: 2,
    padding: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  img: {
    marginTop: 15,
    height: scaler(18),
    width: scaler(20),
  },
});

const equal = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#1c2d47',
    height: scaler(50),
    width: scaler(100),
    borderRadius: 50,
    flex: 1,
  },
  appButtonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
    justifyContent: 'space-around',
  },
});
export default Brackets;
