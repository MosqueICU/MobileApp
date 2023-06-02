import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Box,
  Button,
  Text,
  Center,
  HStack,
  WarningIcon,
  VStack,
  ScrollView,
} from 'native-base';
import {CustomHeader, CustomSubHeader} from '../components/TextVariations';
import {ReciterLanguagesFlatlist} from '../components/FlatlistComponent';
import {
  LoadReciterGridList,
  ReciterGridList,
} from '../components/GridListComponent';
import React, {useState, useEffect} from 'react';

export function QuranSurahListenScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const {surah} = route.params;

  navigation.navigate('QuranSurahListenReciter', {surah: surah});

  return <></>;
}

export function QuranSurahListenReciterScreen() {
  const [chosenReciters, setChosenReciters] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const {surah} = route.params;

  return (
    <Box safeArea flex={1} bg="#020002">
      <VStack px="5" pb="5" space={2}>
        <CustomHeader text={'Choose a reciter'} />
        <HStack alignItems="center" space={1}>
          <CustomSubHeader text={'At least one is required '} />
          <WarningIcon />
        </HStack>
      </VStack>
      <ScrollView>
        <Box m="5">
          <ReciterLanguagesFlatlist />
          <ReciterGridList
            chosenReciters={chosenReciters}
            setChosenReciters={setChosenReciters}
          />
        </Box>
      </ScrollView>
      <Center
        w="100%"
        h="100"
        bg="#020002"
        position="absolute"
        bottom="0"
        rounded="xl">
        <Button
          onPress={() => {
            navigation.goBack();
            navigation.navigate('QuranSurahListenReciterCompile', {
              surah: surah,
              chosenReciters: chosenReciters.filter(reciter => reciter),
            });
          }}
          bg={
            chosenReciters.filter(reciter => reciter).length > 0
              ? 'amber.300'
              : 'grey'
          }
          disabled={chosenReciters.filter(reciter => reciter).length === 0}
          w="80%">
          Continue
        </Button>
        <Text>! Please choose at least one recitation</Text>
      </Center>
    </Box>
  );
}

export function QuranSurahListenReciterCompileScreen() {
  const [compliedAudioFiles, setCompliedAudioFiles] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const {surah, chosenReciters} = route.params;

  return (
    <Box safeArea flex={1} bg="#020002">
      <VStack px="5" pb="5" space={2}>
        {/* <Text color="white">{JSON.stringify(chosenReciters)}</Text> */}
        <CustomHeader text={'Hold on a moment'} />
        <HStack alignItems="center" space={1}>
          <CustomSubHeader
            text={'Please wait while whe load your recitations'}
          />
          <WarningIcon />
        </HStack>
      </VStack>
      <ScrollView>
        <Box m="5">
          <LoadReciterGridList
            surah={surah}
            compliedAudioFiles={compliedAudioFiles}
            setCompliedAudioFiles={setCompliedAudioFiles}
            chosenReciters={chosenReciters}
          />
        </Box>
      </ScrollView>
      <Center
        w="100%"
        h="100"
        bg="#020002"
        position="absolute"
        bottom="0"
        rounded="xl">
        <Button
          w="80%"
          isLoading={compliedAudioFiles.length === 0}
          onPress={() => {
            navigation.navigate('AudioPlayer', {
              audioFiles: compliedAudioFiles,
            });
          }}
          spinnerPlacement="end"
          isLoadingText="Submitting">
          Button
        </Button>
        <Text>! Please choose at least one recitation</Text>
      </Center>
    </Box>
  );
}
