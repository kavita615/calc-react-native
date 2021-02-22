import React from 'react';
import {StyleSheet, View} from 'react-native';
import scaler from 'src/Utils/Shared/scaler';
import Button from './Button';
const orange = ['#ff5f6d', '#ffc371'];
const pink = ['#FBD3E9', '#BB377D'];

function Operations({setResult, text, setText, setHistory}: any) {
  const setValue = (value: any) => {
    if (text === '') {
      return;
    } else {
      setText((prevText: any) => {
        const char = prevText.charAt(prevText.length - 1);
        if (Number.isInteger(Number(char)) || char === ')') {
          return prevText + value;
        } else if (char === '(' && value === '-') {
          return prevText + value;
        } else if (char === '(' && value !== '-') {
          return prevText;
        } else if (char === '-') {
          const char2 = prevText.charAt(prevText.length - 2);
          if (char2 === '(') {
            return prevText;
          }
        }
        const subText = prevText.substr(0, prevText.length - 1);
        return subText + value;
      });
    }
  };

  const calculatePercentage = () => {
    if (text === '') {
      return;
    }
    const char = text.charAt(text.length - 1);
    if (Number.isInteger(Number(char))) {
      const indexes: Array<number> = [
        '+',
        '-',
        '/',
        'x',
        ')',
      ].map((operator: string) => text.lastIndexOf(operator));
      const lastIndex = Math.max.apply(null, indexes);
      const subText = text.substr(0, lastIndex + 1);
      const restText = text.substr(lastIndex + 1, text.length);
      // eslint-disable-next-line no-eval
      const percentage = eval(restText + '/100');
      setText(subText + percentage);
    }
  };

  const calculateResult = () => {
    if (text === '') {
      return;
    }
    try {
      // eslint-disable-next-line no-eval
      const result = '= ' + eval(text.replace(/x/gi, '*')).toString();
      setResult(result);
      const history = {expression: text, result: result};
      setHistory((prevHistory: any) => [...prevHistory, history]);
      setText('');
    } catch (error) {
      console.log(error);
      setResult('Invalid format');
    }
    return;
  };
  return (
    <View style={styles.operators}>
      <View style={styles.slashMinus}>
        <Button
          title={'-'}
          styles={operations}
          onClick={setValue}
          gradient={orange}
        />
        <Button
          title={'/'}
          styles={operations}
          onClick={setValue}
          gradient={orange}
        />
      </View>
      <View style={styles.plusmulper}>
        <Button
          title={'+'}
          styles={plus}
          onClick={setValue}
          gradient={orange}
        />
        <View style={styles.multiPercent}>
          <Button
            title={'x'}
            styles={operations}
            onClick={setValue}
            gradient={orange}
          />
          <Button
            title={'%'}
            styles={operations}
            onClick={calculatePercentage}
            gradient={orange}
          />
        </View>
      </View>
      <Button
        title={'='}
        styles={equal}
        onClick={calculateResult}
        gradient={pink}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  operators: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  slashMinus: {
    flex: scaler(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingRight: 5,
  },
  plusmulper: {
    flex: scaler(2),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  multiPercent: {
    marginLeft: 10,
    marginBottom: 20,
    flex: scaler(1),
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBottom: 20,
  },
});

const plus = StyleSheet.create({
  appButtonContainer: {
    height: scaler(120),
    width: scaler(50),
    borderRadius: scaler(50),
    textAlign: 'center',
  },
  appButtonText: {
    fontSize: scaler(30),
    textAlign: 'center',
    color: 'white',
    paddingTop: 40,
  },
});
const equal = StyleSheet.create({
  appButtonContainer: {
    height: scaler(50),
    width: scaler(120),
    borderRadius: scaler(50),
  },
  appButtonText: {
    fontSize: scaler(26),
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
  },
});
const operations = StyleSheet.create({
  appButtonContainer: {
    height: scaler(50),
    width: scaler(50),
    borderRadius: scaler(50),
  },
  appButtonText: {
    fontSize: scaler(26),
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
  },
});

export default Operations;
