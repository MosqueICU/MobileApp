import {
  Box,
  Text,
  HStack,
  VStack,
  Button,
  View,
  Heading,
  PlayIcon,
} from 'native-base';
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
import {SurahMetadata} from '../data.quran';
import {LocationMap, MiniMap} from './MapPage';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import BackButton from '../components/BackButton';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewMoreText from 'react-native-view-more-text';

const GradientBox = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.container}>
      <LinearGradient
        colors={['transparent', 'black']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.gradient}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    // borderBottomWidth: 1,
    // borderColor: 'grey',
    opacity: 0.95,
  },
});

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

export function QuranPageSurahScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const {surah} = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Box
        overflow="hidden"
        // borderWidth="1px"
        // borderColor={'grey'}
        w="100%"
        h="200">
        <LocationMap
          lat={surah.revelationType == 'Meccan' ? 21.42251 : 24.471153}
          lon={surah.revelationType == 'Meccan' ? 39.826168 : 39.6111216}
        />
        {/* <Box
          onPress={() => {
            navigation.goBack();
          }}
          px="5"
          justifyContent="center"
          // roundedBottom="xl"
          position="absolute"
          opacity="0.7"
          bg="black"
          borderBottomWidth="1px"
          borderColor={'grey'}
          bottom="0"
          w="100%"
          h="10">
          <Text
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              fontSize: 15,
              fontFamily: 'DINOffcPro-Black',
              color: 'white',
            }}>
            Go back
          </Text>
        </Box> */}
        <GradientBox />
      </Box>

      <Box safeArea flex={1} bg="#020002">
        {/* <Pressable
        onPress={() => {
          navigation.goBack();
          navigation.navigate('QuranSurah', {surah: surah});
        }}> */}
        <VStack p="5" space={5} w="100%">
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
                  fontSize: '20',
                  color: 'white',
                }}>
                {surah.name}
              </Text>
            </VStack>
          </HStack>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}
            textStyle={{textAlign: 'center'}}>
            {SurahMetadata[surah.number].description.map((item, index) => (
              <Text key={index} style={{color: 'grey'}}>
                {JSON.stringify(item)}
              </Text>
            ))}
          </ViewMoreText>
        </VStack>
        <VStack space={5} p="5">
          {/* <Pressable
            onPress={() => {
              navigation.goBack();
              navigation.navigate('QuranSurahRead', {surah: surah});
            }}>
            <Box p="2" bg="grey" rounded="md" opacity="0.9"> */}
          <HStack space={3}>
            <Text
              color="white"
              style={{
                fontWeight: '900',
                fontFamily: 'Inter-Medium',
              }}>
              Classic
            </Text>
            <Text
              color="grey"
              style={{
                fontWeight: '900',
                fontFamily: 'Inter-Medium',
              }}>
              Modern (coming soon)
            </Text>
          </HStack>

          <FlatList
            horizontal
            data={SurahMetadata[surah.number].pdfQuran}
            renderItem={({item}) => (
              <Pressable
                onPress={() => {
                  navigation.navigate('BookReader', {source: item.uri});
                }}>
                <VStack
                  justifyContent="center"
                  w="150"
                  m="2"
                  alignItems="center"
                  space={2}
                  h="50"
                  borderWidth={'1px'}
                  borderColor="grey"
                  rounded="xl">
                  <Heading color="white" sub>
                    {item.name}
                  </Heading>
                </VStack>
              </Pressable>
            )}
            keyExtractor={item => item.id}
          />
          {/* </Box>
          </Pressable> */}
          {/* <Pressable
            onPress={() => {
              navigation.goBack();
              navigation.navigate('QuranSurahListen', {surah: surah});
            }}>
            <Box p="2"> */}
          <Text
            color="white"
            style={{
              fontWeight: '900',
              fontFamily: 'Inter-Medium',
            }}>
            Listen
          </Text>
          <VStack
            justifyContent="center"
            w="100%"
            alignItems="center"
            space={2}
            h="75"
            borderWidth={'1px'}
            borderColor="grey"
            rounded="xl">
            <Heading color="white" sub>
              Play a recitation
            </Heading>
            <PlayIcon color="white" />
          </VStack>
          <Heading color="grey" sub>
            Available in more than 4+ languages
          </Heading>
          {/* </Box>
          </Pressable> */}
        </VStack>
        {/* <Divider bg="grey" /> */}

        {/* </Pressable> */}
        {/* <BottomSheetComponent /> */}
      </Box>
    </ScrollView>
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
