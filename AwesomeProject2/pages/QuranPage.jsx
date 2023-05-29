import React from 'react';
import {Box, Text, Center} from 'native-base';
import {CustomHeader} from '../components/TextVariations';
import useApi from '../hooks/useApi';
const QuranPage = () => {
  const {loading, data} = useApi('http://api.alquran.cloud/v1/meta');

  if (loading) return <Text>Loading</Text>;
  return (
    <Box flex="1" bg="#020002">
      <Center h="150" borderBottomWidth="1px" bg="#111111" borderColor="grey">
        <CustomHeader text="The Holy Quran" />

        {/* <Center p="5" w="100%" position="absolute" bottom="0">
          <Box w="60%" borderTopWidth={'1px'} borderColor="grey" />
          <CustomHeader text="The Holy Quran" />
        </Center> */}
      </Center>
      <Box p="10">
        <Text>{JSON.stringify(data)}</Text>
        <CustomHeader text="All surahs" />
      </Box>
    </Box>
  );
};

export default QuranPage;
