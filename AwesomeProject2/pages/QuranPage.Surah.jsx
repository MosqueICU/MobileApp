import {Box, Text, HStack, VStack, Button} from 'native-base';
import {CustomHeader, CustomSubHeader} from '../components/TextVariations';
import TrackPlayer, {State} from 'react-native-track-player';
import React, {useState, useEffect} from 'react';
import SoundPlayer from 'react-native-sound-player';
import {
  Container,
  FormControl,
  Radio,
  WarningOutlineIcon,
  Center,
  Divider,
  Pressable,
} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import BottomSheetComponent from '../components/BottomSheetComponent';

export function QuranPageSurahScreen() {
  const route = useRoute();

  const {surah} = route.params;

  return (
    <Box safeArea flex={1} bg="#020002">
      <Pressable
        onPress={() => {
          navigation.goBack();
          navigation.navigate('QuranSurah', {surah: surah});
        }}>
        <VStack p="5" space={2} w="100%">
          <HStack justifyContent="space-between">
            <VStack>
              <Text style={{color: 'grey'}}>
                {surah.englishNameTranslation}
              </Text>
              <Text
                style={{
                  fontFamily: 'Agrandir-GrandHeavy',
                  fontSize: 20,
                  color: 'white',
                }}>
                {surah.englishName}
              </Text>
            </VStack>
            <VStack>
              <Text style={{color: 'grey'}}>{surah.numberOfAyahs} Ayahs</Text>
              <Text
                style={{
                  fontFamily: 'Agrandir-GrandHeavy',
                  fontSize: 20,
                  color: 'white',
                }}>
                {surah.name}
              </Text>
            </VStack>
          </HStack>
          <Text style={{color: 'grey'}}>
            The Opening' or 'The Opener'), is the first surah (chapter) of the
            Quran. It consists of 7 ayah (verses) which are a prayer for
            guidance and mercy. Al-Fatiha is recited in Muslim obligatory and
            voluntary prayers, known as salah.
          </Text>
        </VStack>
        <HStack space={5} p="5">
          <Pressable
            onPress={() => {
              navigation.goBack();
              navigation.navigate('QuranSurahRead', {surah: surah});
            }}>
            <Box p="2" bg="grey" rounded="md" opacity="0.9">
              <Text
                color="white"
                style={{
                  fontWeight: '900',
                  fontFamily: 'Inter-Medium',
                }}>
                Read
              </Text>
            </Box>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.goBack();
              navigation.navigate('QuranSurahListen', {surah: surah});
            }}>
            <Box p="2">
              <Text
                color="white"
                style={{
                  fontWeight: '900',
                  fontFamily: 'Inter-Medium',
                }}>
                Listen
              </Text>
            </Box>
          </Pressable>
        </HStack>
        <Divider bg="grey" />
      </Pressable>
      {/* <BottomSheetComponent /> */}
    </Box>
  );
}

// export function QuranSurahListenAuthorScreen() {
//   try {
//     // play the file tone.mp3
//     // SoundPlayer.playSoundFile('tone', 'mp3');
//     // or play from url
//     SoundPlayer.playUrl(
//       'https://cdn.islamic.network/quran/audio/128/ar.alafasy/8.mp3',
//     );
//     SoundPlayer.addEventListener('FinishedPlaying', ({success}) => {
//       console.log('finished playing 11', success);
//     });
//     console.log('hello');
//   } catch (e) {
//     console.log(`cannot play the sound file`, e);
//   }
//   return <></>;
// }
