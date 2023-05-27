import React from 'react';
import {Box, Center} from 'native-base';
import GradientImage from '../components/GradientImage';
import {CustomHeader} from '../components/TextVariations';
import {ScrollView} from 'react-native-gesture-handler';
import {HadithEditionsFlatlist} from '../components/FlatlistComponent';
const HadithPage = () => {
  return (
    <ScrollView bounces={false}>
      <Box safeArea flex="1" px="10" bg="#020002">
        <CustomHeader text={'EDITIONS'} />
        <HadithEditionsFlatlist />
      </Box>
    </ScrollView>
  );
};

export default HadithPage;
