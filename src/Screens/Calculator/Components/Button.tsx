import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = (props: any) => {
  const {title, onClick, styles, gradient} = props;
  return (
    <TouchableOpacity
      onPress={() => onClick(title)}
      style={styles.appButtonContainer}>
      {Array.isArray(gradient) ? (
        <LinearGradient colors={gradient} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </LinearGradient>
      ) : (
        <Text style={styles.appButtonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
