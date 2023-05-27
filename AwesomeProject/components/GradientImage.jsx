import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const GradientImage = ({imageUri}) => {
  return (
    <View>
      {/* // Within your render function */}
      <LinearGradient
        colors={['transparent', 'white']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
        <Image style={{height: 100, width: 100}} source={imageUri} />
      </LinearGradient>
      <Text style={{color: 'white'}}>hello</Text>
      {/* <LinearGradient
        style={{position: 'absolute'}}
        colors={['white', 'transparent']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      /> */}
    </View>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default GradientImage;
