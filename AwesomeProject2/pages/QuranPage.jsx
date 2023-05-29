import React from 'react';
import {Box, Text, Center, HStack, Heading} from 'native-base';
import {CustomHeader} from '../components/TextVariations';
import useApi from '../hooks/useApi';
import {SurahFlatlist} from '../components/FlatlistComponent';
const QuranPage = () => {
  const {loading, data} = useApi('http://api.alquran.cloud/v1/meta');
  //
  if (loading) return <Text>Loading</Text>;
  if (data) {
    // const noOfSurahs = data.data.surahs.count;
    // const surahList = data.data.surahs.references;
    return (
      <Box flex="1" bg="#020002">
        <Center h="150" borderBottomWidth="1px" bg="#111111" borderColor="grey">
          <CustomHeader text="The Holy Quran" />

          {/* <Center p="5" w="100%" position="absolute" bottom="0">
          <Box w="60%" borderTopWidth={'1px'} borderColor="grey" />
          <CustomHeader text="The Holy Quran" />
        </Center> */}
          <HStack
            justifyContent={'flex-start'}
            alignItems={'center'}
            w="100%"
            h="50"
            bg="black"
            opacity={'0.6'}
            position="absolute"
            bottom="0">
            <Heading sub color="white" px="5">
              SURAHS
            </Heading>
            {/* <Heading sub color="white" px="5">
              SURAHS
            </Heading>
            <Heading sub color="white" px="5">
              SURAHS
            </Heading>
            <Heading sub color="white" px="5">
              SURAHS
            </Heading> */}
          </HStack>
        </Center>
        <Box p="10">
          <HStack justifyContent={'space-between'}>
            <CustomHeader text="All surahs" />
            <HStack>
              <CustomHeader text="1" />
              <CustomHeader text="2" />
            </HStack>
          </HStack>

          {/* <Text style={{color: 'white'}}>
            {JSON.stringify(data.data.surahs.references)}
          </Text> */}
        </Box>
        <Box flex="1">
          <SurahFlatlist surahs={data.data.surahs.references} />
        </Box>
      </Box>
    );
  } else {
    return <></>;
  }
};

export default QuranPage;
