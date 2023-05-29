import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  Center,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export function RandomHadith() {
  const navigation = useNavigation();
  return (
    <Center
      shadow="3"
      mb="10"
      bg="primary.600"
      py="4"
      px="3"
      borderRightRadius="5"
      roundedRight="md"
      width={375}
      maxWidth="80%">
      <HStack justifyContent="space-between">
        <Box justifyContent="space-between">
          <VStack space="2">
            <Text
              style={{fontFamily: 'Inter-Light', fontWeight: '300'}}
              fontSize="sm"
              color="white">
              Not looking for something
            </Text>
            <Text
              style={{
                fontFamily: 'Agrandir-TextBold',
                fontStyle: 'italic',
                fontWeight: '900',
              }}
              color="white"
              fontSize="xl">
              Any Hadith?
            </Text>
          </VStack>
          <Pressable
            onPressIn={() => {
              navigation.goBack();
              navigation.navigate('HadithRandom');
            }}
            rounded="md"
            bg="primary.400"
            alignSelf="flex-start"
            py="1"
            px="3">
            <Text
              style={{fontFamily: 'Inter-Light', fontWeight: '900'}}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="white">
              Shuffle
            </Text>
          </Pressable>
        </Box>
        <Image
          source={require('../assets/images/QuranBook.png')}
          alt="Aang flying and surrounded by clouds"
          height="100"
          width="100"
        />
      </HStack>
    </Center>
  );
}
