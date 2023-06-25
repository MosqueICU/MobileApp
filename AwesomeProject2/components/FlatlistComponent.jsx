import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Image,
  Spacer,
  Pressable,
  Center,
  NativeBaseProvider,
  Divider,
} from 'native-base';
import {MyListData} from '../data';
import {useNavigation} from '@react-navigation/native';
import {EditionsData} from '../data.hadith';
import {CustomSubHeader} from './TextVariations';
import {ReciterLanguagesData} from '../data.quran';

export function SurahFlatlist({surahs}) {
  const navigation = useNavigation();
  return (
    <Box>
      <FlatList
        data={surahs}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.goBack();
              navigation.navigate('QuranSurah', {surah: item});
            }}>
            <VStack p="5" space={2} w="100%">
              <HStack justifyContent="space-between">
                <VStack>
                  <Text style={{color: 'grey'}}>
                    {item.englishNameTranslation}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Agrandir-GrandHeavy',
                      fontSize: 20,
                      color: 'white',
                    }}>
                    {item.englishName}
                  </Text>
                </VStack>
                <VStack>
                  <Text style={{color: 'grey'}}>
                    {item.numberOfAyahs} Ayahs
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Agrandir-GrandHeavy',
                      fontSize: 20,
                      color: 'white',
                    }}>
                    {item.name}
                  </Text>
                </VStack>
              </HStack>
              <Text style={{color: 'grey'}}>
                The Opening' or 'The Opener'), is the first surah (chapter) of
                the Quran. It consists of 7 ayah (verses) which are a prayer for
                guidance and mercy. Al-Fatiha is recited in Muslim obligatory
                and voluntary prayers, known as salah.
              </Text>
            </VStack>
            <HStack space={5} p="5">
              <Pressable
                onPress={() => {
                  navigation.goBack();
                  navigation.navigate('QuranSurahRead', {surah: item});
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
                  navigation.navigate('QuranSurahListen', {surah: item});
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
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}

export function ExploreFlatlist() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'What is our meaning',
      timeStamp: '12:47 PM',
      recentText: 'Learn Akeedah',
      avatarUrl: require('../assets/images/Washing.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'NEW local reciters',
      timeStamp: '11:11 PM',
      recentText: 'Listen to a Quran recitation',
      avatarUrl: require('../assets/images/AlQuranBookRead.png'),
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: '5 Mosques near you',
      timeStamp: '12:47 PM',
      recentText: 'Attend the friday Jummah',
      avatarUrl: require('../assets/images/Mosque.png'),
    },
  ];
  return (
    <Box>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box
            my="1"
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={['0', '4']}
            pr={['0', '5']}
            py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Box w={10} h={10} rounded="xl">
                <Image
                  alt={item.recentText}
                  source={item.avatarUrl}
                  width="100%"
                  height="100%"
                />
              </Box>
              <VStack>
                <Text
                  color="coolGray.300"
                  style={{
                    fontSize: 10,
                    fontWeight: '900',
                    fontFamily: 'Inter-Black',
                  }}>
                  {item.recentText}
                </Text>

                <Text
                  style={{fontFamily: 'Agrandir-GrandHeavy'}}
                  sub
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.600">
                  {item.fullName}
                </Text>
              </VStack>
              <Spacer />
              {/* <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start">
                {item.timeStamp}
              </Text> */}
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}

export function MyListFlatlist() {
  const navigation = useNavigation();
  return (
    <Box ml="5" bg="#020002" mb="5">
      <FlatList
        horizontal
        data={MyListData}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate(item.route);
            }}>
            <VStack space={1}>
              <Center
                w={100}
                h={100}
                bg="#111111"
                borderColor="#2F2F2F"
                rounded="md"
                borderWidth={2.5}
                m={2}>
                <Image alt={item.title} w={50} h={50} source={item.uri} />
              </Center>
              {/* <Heading m="2" color="white" sub>
                {item.title}
              </Heading> */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 10,
                  fontFamily: 'Inter-Black',
                  fontWeight: '600',
                  color: 'white',
                }}>
                {item.title}
              </Text>
            </VStack>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}

export function ReciterLanguagesFlatlist() {
  const navigation = useNavigation();
  return (
    <Box ml="5" bg="#020002" mb="5">
      <CustomSubHeader text={'Available languages'} />
      <FlatList
        horizontal
        data={ReciterLanguagesData}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate(item.route);
            }}>
            <VStack space={1}>
              <Center
                w={100}
                h={100}
                bg="#111111"
                borderColor="#2F2F2F"
                rounded="md"
                borderWidth={2.5}
                m={2}>
                <Image alt={item.title} w={50} h={50} source={item.uri} />
              </Center>
              {/* <Heading m="2" color="white" sub>
                {item.title}
              </Heading> */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 10,
                  fontFamily: 'Inter-Black',
                  fontWeight: '600',
                  color: 'white',
                }}>
                {item.title}
              </Text>
            </VStack>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}

export function HadithEditionsFlatlist() {
  const navigation = useNavigation();
  return (
    <Box ml={5} bg="#020002" mb={5}>
      <FlatList
        horizontal
        data={EditionsData}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.goBack();
              navigation.navigate('HadithCollection', {item});
            }}>
            <VStack p={5} space={1}>
              <Image alt={item.title} w={124} h={183} source={item.uri} />
              {/* <Heading m="2" color="white" sub>
                {item.title}
              </Heading> */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 10,
                  fontFamily: 'Inter-Black',
                  fontWeight: '600',
                  color: 'white',
                }}>
                {item.title}
              </Text>
            </VStack>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}

export function HadithCommunityEditionsFlatlist() {
  const navigation = useNavigation();
  return (
    <Box ml={5} bg="#020002" mb={5}>
      <FlatList
        horizontal
        data={EditionsData}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate(item.route);
            }}>
            <VStack p={5} space={1}>
              <Image w={371 / 3} h={550 / 3} source={item.uri} />
              {/* <Heading m="2" color="white" sub>
                {item.title}
              </Heading> */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 10,
                  fontFamily: 'Inter-Black',
                  fontWeight: '600',
                  color: 'white',
                }}>
                {item.title}
              </Text>
            </VStack>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}
