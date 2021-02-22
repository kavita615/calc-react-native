import React from 'react';
import {StyleSheet, View} from 'react-native';
import scaler from 'src/Utils/Shared/scaler';
import Button from './Button';

function Numbers({
  text,
  setText,
  setResult,
  setOpened,
  result,
  setHistory,
}: any) {
  const setValue = (value: any) => {
    const char = text.charAt(text.length - 1);
    if ((char === '.' || !Number.isInteger(Number(char))) && value === '.') {
      return;
    } else if (text === '' && value === '.') {
      return setText('0.');
    } else if (text !== '') {
      if (char === ')') {
        setText(text + 'x' + value);
      } else {
        setText(text + value);
      }
    } else {
      setText(value);
    }
  };
  const clearText = () => {
    if (result === '' && text === '') {
      setHistory([]);
    }
    setText('');
    setResult('');
    setOpened(0);
  };
  return (
    <View style={styles.numbers}>
      <View style={styles.row}>
        <Button title={'7'} styles={numberBtn} onClick={setValue} />
        <Button title={'8'} styles={numberBtn} onClick={setValue} />
        <Button title={'9'} styles={numberBtn} onClick={setValue} />
      </View>
      <View style={styles.row}>
        <Button title={'4'} styles={numberBtn} onClick={setValue} />
        <Button title={'5'} styles={numberBtn} onClick={setValue} />
        <Button title={'6'} styles={numberBtn} onClick={setValue} />
      </View>
      <View style={styles.row}>
        <Button title={'1'} styles={numberBtn} onClick={setValue} />
        <Button title={'2'} styles={numberBtn} onClick={setValue} />
        <Button title={'3'} styles={numberBtn} onClick={setValue} />
      </View>
      <View style={styles.row}>
        <Button title={'AC'} styles={numberBtn} onClick={clearText} />
        <Button title={'0'} styles={numberBtn} onClick={setValue} />
        <Button title={'.'} styles={numberBtn} onClick={setValue} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  numbers: {
    paddingHorizontal: scaler(10),
    paddingTop: scaler(15),
    flexGrow: scaler(1),
    flexDirection: 'column',
  },
  row: {
    flex: scaler(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
});

const numberBtn = StyleSheet.create({
  appButtonContainer: {
    height: scaler(50),
    width: scaler(50),
    borderRadius: 50,
  },
  appButtonText: {
    fontSize: scaler(25),
    textAlign: 'center',
    color: 'white',
  },
});

export default Numbers;
