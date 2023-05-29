import React from 'react';
import {View} from 'react-native';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Skia = () => {
  const generateRainbowGradient = () => {
    const colors = [
      '#FF0000', // Red
      '#FF7F00', // Orange
      '#FFFF00', // Yellow
      '#00FF00', // Green
      '#0000FF', // Blue
      '#4B0082', // Indigo
      '#8B00FF', // Violet
    ];

    const numColors = colors.length;
    const stopOffset = 100 / (numColors - 1);

    return colors.map((color, index) => (
      <Stop key={index} offset={`${index * stopOffset}%`} stopColor={color} />
    ));
  };

  return (
    <View>
      <Svg width="200" height="200">
        <Defs>
          <LinearGradient id="rainbowGradient" gradientTransform="rotate(90)">
            {generateRainbowGradient()}
          </LinearGradient>
        </Defs>
        <Path
          d="M10,100 Q90,20 170,100 C190,180 10,180 30,100 Z"
          fill="url(#rainbowGradient)"
        />
      </Svg>
    </View>
  );
};

export default Skia;
