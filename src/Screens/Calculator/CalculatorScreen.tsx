import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Container from 'src/Components/Shared/Container/Container';
import Brackets from './Components/Brackets';
import History from './Components/History';
import Numbers from './Components/Numbers';
import Operations from './Components/Operations';
import scaler from 'src/Utils/Shared/scaler';
import Body from 'src/Components/Shared/Body/Body';

function CalculatorScreen() {
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [opened, setOpened] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    (async () => {
      const prevHistory = await AsyncStorage.getItem('history');
      setHistory(prevHistory ? JSON.parse(prevHistory) : []);
    })();
  }, []);
  var scroll: any;
  useEffect(() => {
    AsyncStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const handleBackspace = () => {
    setText((prevText: any) => {
      const char = prevText.charAt(prevText.length - 1);
      if (char === ')') {
        setOpened((prevCount) => prevCount + 1);
      }
      if (char === '(') {
        setOpened((prevCount) => prevCount - 1);
      }
      return prevText.substr(0, prevText.length - 1);
    });
  };
  console.log(scroll, 'body ref');
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.result}>
          <Body
            //@ts-ignore
            bodyProps={{ref: (node: any) => (scroll = node)}}>
            <ScrollView>
              <History history={history} />
            </ScrollView>
          </Body>

          <Text style={styles.resultText}>{result}</Text>
          <Text style={styles.operationText}>{text}</Text>
        </View>

        <Brackets
          text={text}
          setText={setText}
          opened={opened}
          setOpened={setOpened}
          handleBackspace={handleBackspace}
        />
        <View style={styles.btns}>
          <Numbers
            text={text}
            setText={setText}
            setResult={setResult}
            setOpened={setOpened}
            result={result}
            setHistory={setHistory}
          />
          <Operations
            setResult={setResult}
            text={text}
            setText={setText}
            setHistory={setHistory}
          />
        </View>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: scaler(1),
    backgroundColor: '#273e5d',
  },
  result: {
    flex: scaler(9),
    paddingRight: 15,
  },
  iconbtn: {
    flex: scaler(2),
    color: 'white',
    backgroundColor: 'white',
  },
  resultText: {
    color: 'white',
    fontSize: scaler(40),
    textAlign: 'right',
  },
  operationText: {
    color: 'white',
    fontSize: scaler(25),
    textAlign: 'right',
  },
  brackets: {
    flex: scaler(3),
    backgroundColor: 'white',
  },
  btns: {
    flexGrow: 5,
    flexDirection: 'row',
  },
  numbers: {
    flexGrow: 2,
    backgroundColor: 'yellow',
  },
  operators: {
    flex: 3,
    backgroundColor: 'black',
    paddingHorizontal: scaler(10),
  },
  slashMinus: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: scaler(15),
  },
  plusmulper: {
    flex: 1,
    justifyContent: 'space-around',
    textAlign: 'center',
    flexDirection: 'row',
  },
  multiPercent: {
    marginLeft: 10,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

export default CalculatorScreen;
