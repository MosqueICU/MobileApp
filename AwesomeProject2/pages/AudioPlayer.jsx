import {useNavigation, useRoute} from '@react-navigation/native';
// import {Box, ScrollView, Text} from 'native-base';
// import React, {useState, useEffect} from 'react';
// import SoundPlayer from 'react-native-sound-player';

// const AudioPlayer = () => {
//   const [track, setTrack] = useState(0);
//   const [bundle, setBundle] = useState(0);
//   const route = useRoute();
//   const navigation = useNavigation();
//   const {audioFiles} = route.params;

//   function playAudio() {}

//   useEffect(() => {
//     playAudio();
//   }, [track]);

//   return (
//     <Box bg="black" flex="1">
//       <ScrollView>
//         <Text color="white">
//           numberOfArrays{JSON.stringify(audioFiles.length)}
//         </Text>
//         <Text color="white">
//           numberOfTracks{JSON.stringify(audioFiles[0].length)}
//         </Text>
//       </ScrollView>
//     </Box>
//   );
// };

// export default AudioPlayer;

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {setupPlayer, addTracks} from '../service';
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Icon,
  Center,
} from 'native-base';
import {MaterialCommunityIcons, MaterialIcons} from 'react-native-vector-icons';

const StaggerComp = () => {
  const {isOpen, onToggle} = useDisclose();
  return (
    <Center>
      <Box alignItems="center" minH="220">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}>
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="location-pin"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="microphone"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{
                  color: 'warmGray.50',
                }}
                size="6"
                name="video"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="photo-library"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="warmGray.50"
              />
            }
          />
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
        />
      </HStack>
    </Center>
  );
};

function AudioPlayer() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const {audioFiles} = route.params;
  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
        for (let index = 0; index < audioFiles[0].length; index++) {
          for (let i = 0; i < audioFiles.length; i++) {
            const audioBundle = audioFiles[i];
            const file = audioBundle[index];
            await TrackPlayer.add([
              {
                id: '1',
                url: file.audio,
                title: file.text,
                // description: '',
                // genre: '',
                // album: '',
                // artist: '',

                // artist: 'tobylane',
              },
            ]);
          }
        }
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Play" color="#777" onPress={() => TrackPlayer.play()} />
      <StaggerComp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#112',
  },
});

export default AudioPlayer;
