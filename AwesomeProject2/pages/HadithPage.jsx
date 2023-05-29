import React from 'react';
import {Box, Center, Heading, Text} from 'native-base';
import {CustomHeader} from '../components/TextVariations';
import {ScrollView} from 'react-native-gesture-handler';
import {
  HadithEditionsFlatlist,
  HadithCommunityEditionsFlatlist,
} from '../components/FlatlistComponent';
import {RandomHadith} from '../components/Hadith';
const HadithPage = () => {
  return (
    <ScrollView bounces={false}>
      <Box
        alginItems="center"
        justifyContent={'center'}
        safeArea
        flex="1"
        bg="#020002">
        <Box px={10}>
          <CustomHeader text={'EDITIONS'} />
        </Box>

        <HadithEditionsFlatlist />

        <RandomHadith />

        <Box px={10}>
          <CustomHeader text={'COMMUNITY EDITIONS'} />
        </Box>

        <HadithCommunityEditionsFlatlist />
      </Box>
    </ScrollView>
  );
};

export default HadithPage;
