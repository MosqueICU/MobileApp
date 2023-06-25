import {Box, Text, HStack, VStack, Button, Heading} from 'native-base';
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
import BackButton from '../components/BackButton';
import ViewMoreText from 'react-native-view-more-text';

function renderViewMore(onPress) {
  return (
    <Text color="white" onPress={onPress}>
      View more
    </Text>
  );
}

function renderViewLess(onPress) {
  return (
    <Text color="white" onPress={onPress}>
      View less
    </Text>
  );
}

export function HadithPageCollectionScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;
  console.warn(item);
  const collection = item || '';
  return (
    <Box safeArea alignItems="flex-start" flex={1} bg="#020002">
      {/* <Box position="absolute" top="0" left="0"> */}
      <BackButton />
      {/* </Box> */}

      <VStack p="5" space={2} w="100%">
        <HStack justifyContent="space-between">
          <VStack space={5}>
            <Text fontSize={'xl'} style={{color: 'grey'}}>
              {collection.title}
            </Text>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              textStyle={{textAlign: 'center'}}>
              <Text style={{color: 'grey'}}>{collection.description}</Text>
            </ViewMoreText>
            <Heading sub color="white">
              Volumes
            </Heading>
            <>
              {Object.keys(collection.volumes).map((item, index) => (
                <Pressable
                  style={{justifyContent: 'center', alignItems: 'center'}}
                  onPress={() => {
                    // console.warn(Object.values(collection.volumes[item])[0]);
                    navigation.navigate('BookReader', {
                      source: Object.values(collection.volumes[item])[0],
                    });
                  }}
                  p="5"
                  borderWidth="2px"
                  borderColor="grey"
                  rounded="md">
                  <Text style={{color: 'grey'}}>Volume {item}</Text>
                </Pressable>
              ))}
            </>
            <Heading sub color="white">
              About the author
            </Heading>
            <Text style={{color: 'grey'}}>{collection.author.name}</Text>

            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              textStyle={{textAlign: 'center'}}>
              <Text style={{color: 'grey'}}>{collection.author.bio}</Text>
            </ViewMoreText>
            {/* <Text
                style={{
                  fontFamily: 'Agrandir-GrandHeavy',
                  fontSize: 20,
                  color: 'white',
                }}>
                {collection.englishName}
              </Text> */}
          </VStack>
          {/* <VStack>
              <Text style={{color: 'grey'}}>
                {collection.numberOfAyahs} Ayahs
              </Text>
              <Text
                style={{
                  fontFamily: 'Agrandir-GrandHeavy',
                  fontSize: 20,
                  color: 'white',
                }}>
                {collection.name}
              </Text>
            </VStack> */}
        </HStack>
        {/* <Text style={{color: 'grey'}}>{collection.description}</Text> */}
      </VStack>
      {/* <HStack space={5} p="5"> */}
      {/* <Pressable
            onPress={() => {
              navigation.goBack();
              navigation.navigate('HadithCollectionRead', {
                collection: collection,
              });
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
              navigation.navigate('HadithCollectionListen', {
                collection: collection,
              });
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
          </Pressable> */}
      {/* </HStack> */}
      {/* <Divider bg="grey" /> */}
      {/* <BottomSheetComponent /> */}
    </Box>
  );
}

// export function HadithCollectionListenAuthorScreen() {
//   try {
//     // play the file tone.mp3
//     // SoundPlayer.playSoundFile('tone', 'mp3');
//     // or play from url
//     SoundPlayer.playUrl(
//       'https://cdn.islamic.network/hadith/audio/128/ar.alafasy/8.mp3',
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
