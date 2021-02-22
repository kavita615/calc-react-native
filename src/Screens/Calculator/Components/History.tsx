import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function History({history}: any) {
  return (
    <>
      {history.map((h: any, i: number) => {
        return (
          <View key={i} style={styles.history}>
            <Text style={styles.text}>{h.expression}</Text>
            <Text style={styles.text}>{h.result}</Text>
          </View>
        );
      })}
    </>
  );
}
const styles = StyleSheet.create({
  history: {
    marginBottom: 25,
  },
  text: {
    textAlign: 'right',
    color: 'grey',
  },
});

export default History;
