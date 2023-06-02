import {
  VStack,
  Box,
  FlatList,
  IconButton,
  Text,
  HStack,
  Center,
  Skeleton,
  ScrollView,
} from 'native-base';
import {CustomSubHeader} from './TextVariations';
import useApi from '../hooks/useApi';
import {
  getReciterColor,
  getReciterLanguageFromCode,
  nameFilter,
} from '../functions/Reciter';
import {TouchableHighlight} from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';

const ReciterGridListMachine = ({chosenReciters, setChosenReciters}) => {
  const {loading, data} = useApi(
    'http://api.alquran.cloud/v1/edition/format/audio',
  );
  //
  if (loading) return <Text>Loading</Text>;

  if (data) {
    return (
      <ScrollView mb="10" horizontal="true">
        {/* <Text color="white">{JSON.stringify(chosenReciters)}</Text> */}
        <Box flexWrap flexDirection={'row'}>
          {data.data.map((item, i) => (
            <ReciterGridListMachineItem
              setChosenReciters={setChosenReciters}
              chosenReciters={chosenReciters}
              item={item}
            />
          ))}
        </Box>
      </ScrollView>
    );
  }
};

function ReciterGridListMachineItem({item, setChosenReciters, chosenReciters}) {
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState();

  return (
    <TouchableHighlight
      onPress={() => {
        if (!pressed) {
          setChosenReciters([...chosenReciters, item.identifier]);
          setPressed(true);
        } else {
          let copy = [...chosenReciters];
          delete copy[chosenReciters.indexOf(item.identifier)];
          setChosenReciters(copy);
          setPressed(false);
        }
        // sets a clean copy no dupplicates
      }}>
      <Box
        borderWidth={pressed && '2px'}
        borderColor="white"
        bg={getReciterColor()}
        m={'8px'}
        w="auto"
        borderRadius="full"
        p="3">
        <Text fontFamily="Inter-Bold" color="white" fontWeight="600">
          {nameFilter(item.englishName)}
        </Text>
        <Text
          textAlign={'center'}
          fontFamily="Inter-Bold"
          color="grey"
          fontWeight="600">
          {getReciterLanguageFromCode(item.language)}
        </Text>
      </Box>
    </TouchableHighlight>
  );
}

export function ReciterGridList({chosenReciters, setChosenReciters}) {
  return (
    <VStack>
      {/* <CustomSubHeader text="New" /> */}
      {/* new additions */}
      <Box my="2">
        <CustomSubHeader text="Stock" />
      </Box>

      <ReciterGridListMachine
        chosenReciters={chosenReciters}
        setChosenReciters={setChosenReciters}
      />
      {/* the api reciters */}
      {/* <CustomSubHeader text="Popular" /> */}
      {/* most popular from all the selections from all niches or places */}
      {/* <CustomSubHeader text="Local" /> */}
      {/* from the user database */}
      {/* <CustomSubHeader text="Local Community" /> */}
      {/* from the mosques */}
    </VStack>
  );
}

const LoadReciterGridListMachine = ({
  chosenReciters,
  compliedAudioFiles,
  setCompliedAudioFiles,
  surah,
  setChosenReciters,
}) => {
  if (chosenReciters) {
    return (
      <ScrollView mb="10" horizontal="true">
        {/* <Text color="white">{JSON.stringify(chosenReciters)}</Text> */}
        <Box flexWrap flexDirection={'column'}>
          {chosenReciters.map((item, i) => (
            <LoadReciterGridListMachineItem
              compliedAudioFiles={compliedAudioFiles}
              setCompliedAudioFiles={setCompliedAudioFiles}
              surah={surah}
              setChosenReciters={setChosenReciters}
              chosenReciters={chosenReciters}
              item={item}
            />
          ))}
        </Box>
      </ScrollView>
    );
  }
};

function LoadReciterGridListMachineItem({
  item,
  setChosenReciters,
  surah,
  compliedAudioFiles,
  setCompliedAudioFiles,
  chosenReciters,
}) {
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState();

  let url;

  if (item.includes('.')) {
    // stock item
    url = `http://api.alquran.cloud/v1/surah/${surah.number}/${item}`;
  }

  const {loading, data} = useApi(url);

  useEffect(() => {
    if (data) {
      setCompliedAudioFiles([...compliedAudioFiles, data?.data?.ayahs]);
    }
  }, [data]);
  //
  if (loading)
    return (
      <Center w="100%">
        <HStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}
          p="4">
          <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
          <VStack flex="3" space="4">
            <Skeleton startColor="amber.300" />
            <Skeleton.Text />
            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
          </VStack>
        </HStack>
      </Center>
    );

  if (data) {
    return (
      <Center w="100%">
        <VStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={4}
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}
          p="4"
          h="150">
          <Text color="white">{data.data.edition.englishName}</Text>
          <Text color="white">
            {getReciterLanguageFromCode(data.data.edition.language)}
          </Text>
          <Text color="white">{data.data.edition.name}</Text>
        </VStack>
        {/* <Text color="white">{JSON.stringify(compliedAudioFiles)}</Text> */}
      </Center>
    );
  }
}

export function LoadReciterGridList({
  chosenReciters,
  compliedAudioFiles,
  setCompliedAudioFiles,
  surah,
  setChosenReciters,
}) {
  return (
    <VStack>
      {/* <CustomSubHeader text="New" /> */}
      {/* new additions */}
      <LoadReciterGridListMachine
        compliedAudioFiles={compliedAudioFiles}
        setCompliedAudioFiles={setCompliedAudioFiles}
        surah={surah}
        chosenReciters={chosenReciters}
        setChosenReciters={setChosenReciters}
      />
      {/* the api reciters */}
      {/* <CustomSubHeader text="Popular" /> */}
      {/* most popular from all the selections from all niches or places */}
      {/* <CustomSubHeader text="Local" /> */}
      {/* from the user database */}
      {/* <CustomSubHeader text="Local Community" /> */}
      {/* from the mosques */}
    </VStack>
  );
}
