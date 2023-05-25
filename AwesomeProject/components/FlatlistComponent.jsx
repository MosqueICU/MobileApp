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
  Center,
  NativeBaseProvider,
} from 'native-base';
import {MyListData} from '../data';

export default function FlatlistComponent() {
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
                <Image source={item.avatarUrl} width="100%" height="100%" />
              </Box>
              <VStack>
                <Text
                  color="coolGray.300"
                  style={{
                    fontSize: 15,
                    fontFamily: 'DINOffcPro-Black',
                  }}>
                  {item.recentText}
                </Text>

                <Heading
                  sub
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.600">
                  {item.fullName}
                </Heading>
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

export function FlatlistHorizontalComponent() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Sujitha Mathur',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];
  return (
    <Box ml="5" bg="#020002" mb="5">
      <FlatList
        horizontal
        data={MyListData}
        renderItem={({item}) => (
          <VStack space={1}>
            <Center
              w="100"
              h="100"
              bg="#111111"
              borderColor="#2F2F2F"
              rounded="md"
              borderWidth="2.5px"
              m="2">
              <Image w="50" h="50" source={item.uri} />
            </Center>
            <Heading m="2" color="white" sub>
              {item.title}
            </Heading>
          </VStack>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}
